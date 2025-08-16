'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { Calendar, Clock, User, FileText, Pill, ChevronRight } from 'lucide-react'

// Mock data
const mockPatients = [
  { id: 1, name: 'John Smith', age: 45, condition: 'Hypertension', nextAppointment: '2025-08-18' },
  { id: 2, name: 'Maria Rodriguez', age: 32, condition: 'Migraine', nextAppointment: '2025-08-19' },
  { id: 3, name: 'David Williams', age: 28, condition: 'Back Pain', nextAppointment: '2025-08-20' },
]

const mockAppointments = [
  { id: 1, patient: 'John Smith', time: '10:00 AM', type: 'Check-up', notes: 'Follow-up on medication' },
  { id: 2, patient: 'Maria Rodriguez', time: '2:30 PM', type: 'Consultation', notes: 'New symptoms discussion' },
]

export default function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Dr. Sarah</h1>
          <p className="text-gray-500">Here's what's happening with your patients today</p>
        </div>
        <Button>
          Schedule Appointment
        </Button>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <div className="flex items-center">
            <Calendar className="mr-2 text-primary" size={20} />
            <h2 className="text-lg font-semibold">Today's Schedule</h2>
          </div>
          <p className="text-sm text-gray-500 mt-1">Wednesday, August 16, 2025</p>
        </div>
        
        <div className="divide-y">
          {mockAppointments.map((appointment) => (
            <div key={appointment.id} className="px-6 py-4 flex justify-between items-center">
              <div>
                <div className="flex items-center">
                  <Clock size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">{appointment.time}</span>
                </div>
                <div className="mt-1 font-medium">{appointment.patient}</div>
                <div className="text-sm text-gray-500 mt-1">{appointment.type}</div>
              </div>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline">View Details</Button>
                <Button size="sm">Start Session</Button>
              </div>
            </div>
          ))}
          
          {mockAppointments.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500">No appointments scheduled for today</p>
            </div>
          )}
        </div>
      </div>

      {/* Patients & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Patients */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <div className="flex items-center">
              <User className="mr-2 text-primary" size={20} />
              <h2 className="text-lg font-semibold">My Patients</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <div className="divide-y">
            {mockPatients.map((patient) => (
              <div key={patient.id} className="px-6 py-4 flex justify-between items-center">
                <div>
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {patient.age} years • {patient.condition}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">Next Visit</div>
                  <div className="text-sm font-medium">{formatDate(patient.nextAppointment)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-medium text-gray-700 mb-4">Quick Summary</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <User size={18} className="text-primary" />
                  </div>
                  <div className="text-sm">Total Patients</div>
                </div>
                <div className="font-semibold">24</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Calendar size={18} className="text-green-500" />
                  </div>
                  <div className="text-sm">Appointments (This Week)</div>
                </div>
                <div className="font-semibold">12</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <FileText size={18} className="text-purple-500" />
                  </div>
                  <div className="text-sm">Medical Records</div>
                </div>
                <div className="font-semibold">85</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Pill size={18} className="text-yellow-500" />
                  </div>
                  <div className="text-sm">Prescriptions</div>
                </div>
                <div className="font-semibold">32</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-lg shadow-sm p-6 text-white">
            <h3 className="font-medium mb-2">Need help?</h3>
            <p className="text-sm text-primary-100 mb-4">Access resources or contact support for assistance.</p>
            <Button variant="outline" className="bg-white text-primary hover:bg-primary-50 w-full">
              Support Center
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
