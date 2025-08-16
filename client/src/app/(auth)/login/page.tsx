'use client'

import React from 'react'
import Link from 'next/link'
import { LoginForm } from '@/components/auth/auth-form'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const handleLogin = async (data: any) => {
    // This would normally connect to your API
    console.log('Login form submitted:', data)
    // For demo purposes, we'll just log the data and simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    // In a real app, you would redirect to the dashboard based on user role
    // All new users start with 'user' role until admin assigns them
    window.location.href = '/dashboard/user'
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Or{' '}
            <Link href="/signup" className="font-medium text-primary hover:text-primary/80">
              create a new account
            </Link>
          </p>
        </div>
        
        <div className="mt-8 bg-white px-6 py-8 shadow-sm rounded-lg border border-slate-100">
          <LoginForm onSubmit={handleLogin} />
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-slate-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-between border-slate-200 hover:border-primary hover:text-primary"
                onClick={() => {
                  window.location.href = '/dashboard/user'
                }}
              >
                <span>Demo Login (User)</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">New</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-slate-200"
                onClick={() => {
                  window.location.href = '/dashboard/patient'
                }}
              >
                Demo Login (Patient)
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-slate-200"
                onClick={() => {
                  window.location.href = '/dashboard/doctor'
                }}
              >
                Demo Login (Doctor)
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-slate-200"
                onClick={() => {
                  window.location.href = '/dashboard/admin'
                }}
              >
                Demo Login (Admin)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
