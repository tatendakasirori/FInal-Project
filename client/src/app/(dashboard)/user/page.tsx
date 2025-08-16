'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileText, User, Info, ChevronRight } from 'lucide-react'

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold">Welcome to Healthcare App</h1>
        <p className="text-gray-600 mt-2">
          Thank you for signing up! Your account is currently pending role assignment.
        </p>
        
        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
          <div className="flex items-start">
            <Info className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-medium text-blue-700">Waiting for Admin Approval</h3>
              <p className="mt-1 text-blue-600">
                An administrator will review your account and assign you a role as a patient, doctor, or admin.
                You'll receive an email notification when this process is complete.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <User className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-medium">Your Profile</h3>
              <p className="text-sm text-gray-500 mt-1">
                Make sure your profile information is complete and accurate
              </p>
              <Button variant="ghost" size="sm" className="text-primary mt-2 px-0">
                Update Profile
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <FileText className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-medium">Healthcare Services</h3>
              <p className="text-sm text-gray-500 mt-1">
                Learn about the healthcare services available to you
              </p>
              <Button variant="ghost" size="sm" className="text-primary mt-2 px-0">
                View Services
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Need Help?</h2>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600">
            If you have any questions or need assistance, our support team is here to help.
          </p>
          
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="outline">
              Contact Support
            </Button>
            <Button variant="outline">
              FAQ
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
