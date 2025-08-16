from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
import os, json, random, time
from uuid import uuid4
from dotenv import load_dotenv
from email.message import EmailMessage
import smtplib

load_dotenv()

app = Flask(__name__)
bcrypt = Bcrypt(app)

# --- Configuration ---
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

SERVER_DIR = "server"
os.makedirs(SERVER_DIR, exist_ok=True)

USERS_FILE = os.path.join(SERVER_DIR, "users.json")
OTP_FILE = os.path.join(SERVER_DIR, "otp.json")  # create new for OTPs

# Initialize files if missing
for f, default in [(USERS_FILE, {}), (OTP_FILE, {})]:
    if not os.path.exists(f):
        with open(f, "w") as file:
            json.dump(default, file)

# --- Helper Functions ---
def load_json(file_path):
    with open(file_path, "r") as f:
        return json.load(f)

def save_json(file_path, data):
    with open(file_path, "w") as f:
        json.dump(data, f, indent=2)

def generate_otp():
    return str(random.randint(100000, 999999))

def send_otp_email(receiver_email, otp):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Your OTP Verification Code"
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = receiver_email
        msg.set_content(f"Your OTP is: {otp}. It expires in 5 minutes.")
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
        print(f"✅ OTP sent to {receiver_email}: {otp}")
    except Exception as e:
        print(f"❌ Failed to send OTP email: {e}")

# --- Routes ---
@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    name = data.get("name")
    password = data.get("password")

    if not email or not password or not name:
        return jsonify({"error": "Email, name, and password are required"}), 400

    users_db = load_json(USERS_FILE)
    if email in users_db:
        return jsonify({"error": "Email already registered"}), 400

    hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8")
    users_db[email] = {
        "id": str(uuid4()),
        "name": name,
        "password": hashed_pw,
        "verified": False
    }
    save_json(USERS_FILE, users_db)

    # Generate OTP
    otp_db = load_json(OTP_FILE)
    otp = generate_otp()
    otp_db[email] = {"otp": otp, "expires": time.time() + 300}  # 5 min expiry
    save_json(OTP_FILE, otp_db)

    send_otp_email(email, otp)
    return jsonify({"message": "User registered. OTP sent to email."}), 201

@app.route("/api/verify", methods=["POST"])
def verify():
    data = request.get_json()
    email = data.get("email")
    otp_input = data.get("otp")

    otp_db = load_json(OTP_FILE)
    users_db = load_json(USERS_FILE)

    if email not in otp_db:
        return jsonify({"error": "No OTP pending for this email"}), 400

    record = otp_db[email]
    if time.time() > record["expires"]:
        del otp_db[email]
        save_json(OTP_FILE, otp_db)
        return jsonify({"error": "OTP expired"}), 400

    if record["otp"] != otp_input:
        return jsonify({"error": "Invalid OTP"}), 400

    users_db[email]["verified"] = True
    save_json(USERS_FILE, users_db)

    del otp_db[email]
    save_json(OTP_FILE, otp_db)

    return jsonify({"message": "Email verified successfully!"}), 200

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    users_db = load_json(USERS_FILE)

    if email not in users_db:
        return jsonify({"error": "Invalid email or password"}), 401

    user = users_db[email]
    if not user["verified"]:
        return jsonify({"error": "Email not verified"}), 401

    if not bcrypt.check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid email or password"}), 401

    return jsonify({
        "message": "Login successful!",
        "user": {"id": user["id"], "name": user["name"], "email": email}
    }), 200

# --- Main ---
if __name__ == "__main__":
    app.run(debug=True)
