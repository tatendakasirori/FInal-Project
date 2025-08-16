'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { UserPlus, ChevronDown, ChevronUp, Search } from 'lucide-react'

// Mock data
const mockDoctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialization: 'Cardiology', patients: 24, appointments: 12 },
  { id: 2, name: 'Dr. Michael Chen', specialization: 'Neurology', patients: 18, appointments: 8 },
  { id: 3, name: 'Dr. Emily Wilson', specialization: 'Pediatrics', patients: 32, appointments: 15 },
  { id: 4, name: 'Dr. Robert Garcia', specialization: 'Orthopedics', patients: 21, appointments: 9 },
]

const mockPatients = [
  { id: 1, name: 'John Smith', age: 45, lastVisit: '2025-07-30', assignedDoctor: 'Dr. Sarah Johnson' },
  { id: 2, name: 'Maria Rodriguez', age: 32, lastVisit: '2025-08-02', assignedDoctor: 'Dr. Michael Chen' },
  { id: 3, name: 'David Williams', age: 28, lastVisit: '2025-08-05', assignedDoctor: 'Dr. Emily Wilson' },
  { id: 4, name: 'Sophie Brown', age: 9, lastVisit: '2025-07-25', assignedDoctor: 'Dr. Emily Wilson' },
]

const mockAppointments = [
  { id: 1, patient: 'John Smith', doctor: 'Dr. Sarah Johnson', date: '2025-08-18', time: '10:00 AM', status: 'Confirmed' },
  { id: 2, patient: 'Maria Rodriguez', doctor: 'Dr. Michael Chen', date: '2025-08-19', time: '2:30 PM', status: 'Pending' },
  { id: 3, patient: 'David Williams', doctor: 'Dr. Emily Wilson', date: '2025-08-20', time: '11:15 AM', status: 'Confirmed' },
]

interface DashboardStatsProps {
  title: string
  value: number
  change: number
  icon: React.ReactNode
}

const DashboardStats = ({ title, value, change, icon }: DashboardStatsProps) => {
  const isPositive = change >= 0
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="bg-primary/10 p-3 rounded-full">
          {icon}
        </div>
      </div>
      <div className={`flex items-center mt-4 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        <span>
          {isPositive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
        <span className="ml-1">{Math.abs(change)}% from last month</span>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'doctors' | 'patients' | 'appointments'>('doctors')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button>
            <UserPlus size={16} className="mr-2" />
            Add New
          </Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardStats 
          title="Total Doctors" 
          value={12} 
          change={8} 
          icon={<UserPlus size={24} className="text-primary" />} 
        />
        <DashboardStats 
          title="Total Patients" 
          value={284} 
          change={12} 
          icon={<UserPlus size={24} className="text-primary" />} 
        />
        <DashboardStats 
          title="New Appointments" 
          value={32} 
          change={-5} 
          icon={<UserPlus size={24} className="text-primary" />} 
        />
        <DashboardStats 
          title="Active Treatments" 
          value={76} 
          change={3} 
          icon={<UserPlus size={24} className="text-primary" />} 
        />
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => setActiveTab('doctors')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'doctors'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Doctors
            </button>
            <button
              onClick={() => setActiveTab('patients')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'patients'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Patients
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'appointments'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Appointments
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 'doctors' && (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patients</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointments</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockDoctors.map((doctor) => (
                      <tr key={doctor.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{doctor.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.specialization}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.patients}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.appointments}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" variant="outline" className="ml-2">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'patients' && (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Doctor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockPatients.map((patient) => (
                      <tr key={patient.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{patient.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.age}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(patient.lastVisit)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.assignedDoctor}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" variant="outline" className="ml-2">Assign Doctor</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockAppointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{appointment.patient}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctor}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(appointment.date)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            appointment.status === 'Confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm" variant="outline" className="ml-2">Cancel</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
