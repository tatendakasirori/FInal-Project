'use client'

import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  User, 
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SidebarProps {
  role: 'admin' | 'doctor' | 'patient' | 'user'
}

interface DashboardLayoutProps {
  children: ReactNode
  params: { role?: 'admin' | 'doctor' | 'patient' | 'user' }
}

const Sidebar = ({ role = 'patient'}: SidebarProps) => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Determine role from path if not provided
  const determineRole = (): 'admin' | 'doctor' | 'patient' | 'user' => {
    if (pathname.includes('/admin')) return 'admin'
    if (pathname.includes('/doctor')) return 'doctor'
    if (pathname.includes('/patient')) return 'patient'
    return 'user'
  }
  
  const effectiveRole = role || determineRole()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = {
    admin: [
      { name: 'Doctors', href: '/dashboard/admin/doctors', icon: Users },
      { name: 'Patients', href: '/dashboard/admin/patients', icon: Users },
      { name: 'Appointments', href: '/dashboard/admin/appointments', icon: Calendar },
      { name: 'Reports', href: '/dashboard/admin/reports', icon: FileText },
      { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
    ],
    doctor: [
      { name: 'My Patients', href: '/dashboard/doctor/patients', icon: Users },
      { name: 'Appointments', href: '/dashboard/doctor/appointments', icon: Calendar },
      { name: 'Medical Records', href: '/dashboard/doctor/records', icon: FileText },
      { name: 'Profile', href: '/dashboard/doctor/profile', icon: User },
    ],
    patient: [
      { name: 'Appointments', href: '/dashboard/patient/appointments', icon: Calendar },
      { name: 'Medical Records', href: '/dashboard/patient/records', icon: FileText },
      { name: 'My Doctor', href: '/dashboard/patient/doctor', icon: User },
      { name: 'Profile', href: '/dashboard/patient/profile', icon: User },
    ],
    user: [
      { name: 'Dashboard', href: '/dashboard/user', icon: User },
      { name: 'Profile', href: '/dashboard/user/profile', icon: User },
      { name: 'Support', href: '/dashboard/user/support', icon: FileText },
    ],
  }

  const currentNavItems = navItems[effectiveRole]
  
  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-10 flex items-center justify-between p-4 border-b shadow-sm">
        <div className="font-bold text-xl text-primary">Healthcare App</div>
        <button onClick={toggleMobileMenu} className="block text-slate-500 hover:text-slate-700">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-10 bg-slate-800 bg-opacity-50 transition-opacity duration-200",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed top-0 left-0 bottom-0 w-64 bg-white transform transition-transform duration-200 ease-in-out shadow-lg",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b bg-primary/5">
              <div className="font-bold text-primary">
                {effectiveRole.charAt(0).toUpperCase() + effectiveRole.slice(1)} Dashboard
              </div>
              <button onClick={toggleMobileMenu} className="text-slate-500 hover:text-slate-700">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {currentNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium',
                      isActive 
                        ? 'bg-primary text-white' 
                        : 'text-slate-700 hover:bg-slate-100'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon size={20} />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
            <div className="p-4 border-t">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  // In a real app, this would handle logout
                  window.location.href = '/login'
                }}
              >
                <LogOut size={18} />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 border-r bg-white shadow-sm">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-6 border-b bg-primary/5">
            <div className="font-bold text-xl text-primary">Healthcare App</div>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="px-4 py-3 text-xs uppercase tracking-wider text-slate-500 font-semibold border-b">
              {effectiveRole.charAt(0).toUpperCase() + effectiveRole.slice(1)} Dashboard
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
              {currentNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium',
                      isActive 
                        ? 'bg-primary text-white' 
                        : 'text-slate-700 hover:bg-slate-100'
                    )}
                  >
                    <item.icon size={20} />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="p-4 border-t">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary hover:text-white"
              onClick={() => {
                // In a real app, this would handle logout
                window.location.href = '/login'
              }}
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default function DashboardLayout({ children, params }: DashboardLayoutProps) {
  // Determine role from URL path
  const pathname = usePathname()
  const determineRole = (): 'admin' | 'doctor' | 'patient' | 'user' => {
    if (pathname.includes('/admin')) return 'admin'
    if (pathname.includes('/doctor')) return 'doctor'
    if (pathname.includes('/patient')) return 'patient'
    return 'user'
  }
  
  const effectiveRole = params.role || determineRole()
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar role={effectiveRole} />
      <div className="lg:pl-64 pt-16 lg:pt-0">
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
