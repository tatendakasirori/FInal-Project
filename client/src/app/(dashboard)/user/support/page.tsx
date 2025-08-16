'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, HelpCircle, Mail, Phone } from 'lucide-react'

export default function UserSupport() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Support Center</h1>
        <p className="text-slate-500">Get help with your account or services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <MessageCircle className="text-primary" size={24} />
          </div>
          <h3 className="font-medium text-lg mb-2">Live Chat</h3>
          <p className="text-slate-500 mb-4">Chat with our support team in real-time</p>
          <Button variant="outline" className="w-full">Start Chat</Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Mail className="text-primary" size={24} />
          </div>
          <h3 className="font-medium text-lg mb-2">Email Support</h3>
          <p className="text-slate-500 mb-4">Send us an email and we'll respond within 24 hours</p>
          <Button variant="outline" className="w-full">Send Email</Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Phone className="text-primary" size={24} />
          </div>
          <h3 className="font-medium text-lg mb-2">Phone Support</h3>
          <p className="text-slate-500 mb-4">Call us directly for immediate assistance</p>
          <Button variant="outline" className="w-full">Call Now</Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold text-lg">Frequently Asked Questions</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="border rounded-md overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 font-medium flex items-center">
              <HelpCircle className="mr-2 h-4 w-4 text-primary" />
              How do I update my profile information?
            </div>
            <div className="px-4 py-3 text-slate-600 text-sm">
              You can update your profile information by navigating to the Profile section in your dashboard. 
              Click on the edit button next to each field to make changes, and don't forget to save your changes.
            </div>
          </div>
          
          <div className="border rounded-md overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 font-medium flex items-center">
              <HelpCircle className="mr-2 h-4 w-4 text-primary" />
              What happens after I create an account?
            </div>
            <div className="px-4 py-3 text-slate-600 text-sm">
              After creating an account, an administrator will review your information and assign you a role 
              (patient, doctor, or admin). You'll receive an email notification when this process is complete.
            </div>
          </div>
          
          <div className="border rounded-md overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 font-medium flex items-center">
              <HelpCircle className="mr-2 h-4 w-4 text-primary" />
              How can I reset my password?
            </div>
            <div className="px-4 py-3 text-slate-600 text-sm">
              If you've forgotten your password, click on the "Forgot Password" link on the login page. 
              You'll receive an email with instructions to reset your password.
            </div>
          </div>
          
          <div className="border rounded-md overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 font-medium flex items-center">
              <HelpCircle className="mr-2 h-4 w-4 text-primary" />
              Is my personal information secure?
            </div>
            <div className="px-4 py-3 text-slate-600 text-sm">
              Yes, we take data security seriously. All personal information is encrypted and stored securely. 
              We comply with all relevant data protection regulations and never share your information with third parties without your consent.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold text-lg">Contact Us</h2>
          <p className="text-sm text-slate-500">Send us a message and we'll get back to you</p>
        </div>
        
        <div className="p-6">
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                placeholder="Please describe your issue or question in detail..."
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full md:w-auto">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
