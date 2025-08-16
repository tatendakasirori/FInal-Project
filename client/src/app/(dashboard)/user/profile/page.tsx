'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Mail, Phone, MapPin } from 'lucide-react'

export default function UserProfile() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <Button>Save Changes</Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold text-lg">Personal Information</h2>
          <p className="text-sm text-slate-500">Update your personal details</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b">
            <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
              JD
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-medium">John Doe</h3>
              <p className="text-slate-500">User</p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <Button size="sm" variant="outline">Change Photo</Button>
                <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                  Remove
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-slate-400" />
                </div>
                <Input id="name" defaultValue="John Doe" className="pl-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-slate-400" />
                </div>
                <Input id="email" type="email" defaultValue="john.doe@example.com" className="pl-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-slate-400" />
                </div>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="pl-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium">
                Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-4 w-4 text-slate-400" />
                </div>
                <Input id="address" defaultValue="123 Main St, Anytown, CA 12345" className="pl-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold text-lg">Account Settings</h2>
          <p className="text-sm text-slate-500">Manage your account preferences</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-medium">Change Password</h3>
              <p className="text-sm text-slate-500">Update your password for enhanced security</p>
            </div>
            <Button variant="outline">Change Password</Button>
          </div>
          
          <div className="border-t pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-medium text-red-600">Delete Account</h3>
                <p className="text-sm text-slate-500">Permanently delete your account and all data</p>
              </div>
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
