'use client'

import React from 'react'
import Link from 'next/link'
import { SignupForm } from '@/components/auth/auth-form'

export default function SignupPage() {
  const handleSignup = async (data: any) => {
    // This would normally connect to your API
    console.log('Signup form submitted:', data)
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    // For demo purposes, we'll just log the data and simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    // New users are redirected to the user dashboard
    window.location.href = '/dashboard/user'
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-primary hover:text-primary/80">
              Sign in instead
            </Link>
          </p>
        </div>
        
        <div className="mt-8 bg-white px-6 py-8 shadow-sm rounded-lg border border-slate-100">
          <SignupForm onSubmit={handleSignup} />
          
          <div className="mt-6">
            <p className="mt-2 text-center text-sm text-slate-600">
              By signing up, you agree to our{' '}
              <a href="#" className="font-medium text-primary hover:text-primary/80">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-primary hover:text-primary/80">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
