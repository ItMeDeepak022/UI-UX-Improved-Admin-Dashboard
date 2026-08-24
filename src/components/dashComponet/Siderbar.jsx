'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  User,
  Settings,
  LogOut,
  Layers,
  X,
} from 'lucide-react';

export default function Siderbar({ show, setshow }) {
  const pathname = usePathname();

  // Simple Sidebar Links (Unchanged)
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Users', href: '/dashboard/users', icon: Users },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  // User's show / hide function logic
  const showhide = () => {
    if (setshow) {
      setshow(!show);
    }
  };

  return (
    <>
      {/* 1. Desktop Sidebar (h-screen sticky top-0 with scrollable nav) */}
      <aside className="w-64 bg-[#F8F9FA] border-r border-gray-200 h-screen sticky top-0 hidden sm:flex flex-col select-none">
        {/* Logo (Fixed at top) */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-200 flex-shrink-0">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-base text-gray-900 leading-none">Demo Dashboard</h1>
            <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
          </div>
        </div>

        {/* Nav Links (Vertical Scrollable when height overflows) */}
        <nav className="flex-1 space-y-2 px-3 py-3 overflow-y-auto scrollbar-none">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-gray-200/60 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout (Fixed at bottom) */}
        <div className="border-t border-gray-200 py-2 px-2 flex-shrink-0">
          <Link
            href="/login"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* 2. Mobile Backdrop  */}
      {show && (
        <div
          onClick={showhide}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 sm:hidden"
        />
      )}

      {/* 3. Mobile Sidebar (translate-x slide animation logic) */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 z-50 bg-[#F8F9FA] border-r border-gray-200 h-screen sm:hidden flex flex-col select-none shadow-2xl transition-transform duration-300 ease-in-out ${
          show ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo & Close Button */}
        <div className="relative flex items-center gap-3 px-5 py-3.5 border-b border-gray-200 flex-shrink-0">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-base text-gray-900 leading-none">Demo Dashboard</h1>
            <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
          </div>

          {/* Close button with X icon (User Logic) */}
          <div
            onClick={showhide}
            className="absolute top-3.5 right-3.5 p-1 rounded-lg text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors"
          >
            <X className="w-6 h-6" />
          </div>
        </div>

        {/* Nav Links (Vertical Scrollable) */}
        <nav className="flex-1 space-y-2 px-3 py-3 overflow-y-auto scrollbar-none">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                onClick={showhide} // Mobile me link click hone par sidebar close ho jaye
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-gray-200/60 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-gray-200 py-2 px-2 flex-shrink-0">
          <Link
            href="/login"
            onClick={showhide}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
