'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { Calendar, Clock, User, FileText, Pill, ChevronRight, Phone, MessageSquare } from 'lucide-react'

// Mock data
const mockAppointments = [
  { id: 1, doctor: 'Dr. Sarah Johnson', speciality: 'Cardiology', date: '2025-08-18', time: '10:00 AM', status: 'Confirmed' },
  { id: 2, doctor: 'Dr. Michael Chen', speciality: 'Neurology', date: '2025-08-25', time: '2:30 PM', status: 'Pending' },
]

const mockMedications = [
  { id: 1, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', startDate: '2025-07-10', endDate: '2025-10-10' },
  { id: 2, name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily at bedtime', startDate: '2025-07-10', endDate: '2025-10-10' },
]

export default function PatientDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, John</h1>
          <p className="text-gray-500">Manage your health information and appointments</p>
        </div>
        <Button>
          Book New Appointment
        </Button>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Phone className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-medium">Contact Doctor</h3>
            <p className="text-sm text-gray-500 mt-1">Reach out to your doctor</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <MessageSquare className="text-green-600" size={24} />
          </div>
          <div>
            <h3 className="font-medium">Message Portal</h3>
            <p className="text-sm text-gray-500 mt-1">Check your messages</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <FileText className="text-purple-600" size={24} />
          </div>
          <div>
            <h3 className="font-medium">Medical Records</h3>
            <p className="text-sm text-gray-500 mt-1">Access your health files</p>
          </div>
        </div>
      </div>

      {/* Your Doctor */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <div className="flex items-center">
            <User className="mr-2 text-primary" size={20} />
            <h2 className="text-lg font-semibold">Your Doctor</h2>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <span className="text-2xl font-bold text-gray-600">SJ</span>
            </div>
            
            <div className="text-center md:text-left md:flex-1">
              <h3 className="text-xl font-medium">Dr. Sarah Johnson</h3>
              <p className="text-gray-500">Cardiology</p>
              <p className="text-sm text-gray-500 mt-2">
                Board Certified • 15 years experience
              </p>
              
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <Button size="sm" variant="outline">
                  <Phone size={16} className="mr-2" />
                  Call
                </Button>
                <Button size="sm" variant="outline">
                  <MessageSquare size={16} className="mr-2" />
                  Message
                </Button>
                <Button size="sm">
                  Schedule Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <div className="flex items-center">
              <Calendar className="mr-2 text-primary" size={20} />
              <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <div className="divide-y">
            {mockAppointments.map((appointment) => (
              <div key={appointment.id} className="px-6 py-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">{appointment.doctor}</div>
                    <div className="text-sm text-gray-500 mt-1">{appointment.speciality}</div>
                    
                    <div className="flex items-center mt-2">
                      <Calendar size={14} className="text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500 mr-3">{formatDate(appointment.date)}</span>
                      <Clock size={14} className="text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">{appointment.time}</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      appointment.status === 'Confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
                
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline">Reschedule</Button>
                  <Button size="sm" variant="outline">Cancel</Button>
                </div>
              </div>
            ))}
            
            {mockAppointments.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500">No upcoming appointments</p>
                <Button className="mt-4">Book an Appointment</Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Current Medications */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <div className="flex items-center">
              <Pill className="mr-2 text-primary" size={20} />
              <h2 className="text-lg font-semibold">Current Medications</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <div className="divide-y">
            {mockMedications.map((medication) => (
              <div key={medication.id} className="px-6 py-4">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Pill size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{medication.name} ({medication.dosage})</div>
                    <div className="text-sm text-gray-500 mt-1">{medication.frequency}</div>
                    
                    <div className="text-sm text-gray-500 mt-1">
                      {formatDate(medication.startDate)} - {formatDate(medication.endDate)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {mockMedications.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500">No current medications</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Health Metrics Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Health Metrics</h2>
          <p className="text-sm text-gray-500 mt-1">Track your key health indicators</p>
        </div>
        
        <div className="px-6 py-6">
          <div className="text-center">
            <p className="text-gray-500">Health metrics visualization will be displayed here</p>
            <p className="text-sm text-gray-500 mt-2">
              Connect your devices to see your health data
            </p>
            <Button className="mt-4">Connect Devices</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
