'use client'

import React from 'react'
import Link from 'next/link'
import { SignupForm } from '@/components/auth/auth-form'

export default function SignupPage() {
  const handleSignup = async (data: any) => {
    // This would normally connect to your API
    console.log('Signup form submitted:', data)
    // For demo purposes, we'll just log the data and simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    // In a real app, you would redirect to the login page or directly to the dashboard
    window.location.href = '/login'
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in instead
            </Link>
          </p>
        </div>
        
        <div className="mt-8 bg-white px-6 py-8 shadow-md rounded-lg">
          <SignupForm onSubmit={handleSignup} />
          
          <div className="mt-6">
            <p className="mt-2 text-center text-sm text-gray-600">
              By signing up, you agree to our{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
