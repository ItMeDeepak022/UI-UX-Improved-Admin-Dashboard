'use client';

import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

export default function Header({ showhide, onMenuToggle }) {
  const handleToggle = showhide || onMenuToggle;

  return (
    <header className="sticky top-0 sm:h-16 h-15 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-30">
      {/* 1. Left Side: Hamburger (Mobile) + Search Bar */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Button */}
        <button
          onClick={handleToggle}
          className="sm:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center gap-2 bg-[#F4F5F7] px-3 py-2 rounded-lg w-48 sm:w-72 border border-gray-200">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent text-xs text-gray-700 outline-none w-full placeholder-gray-400"
          />
        </div>
      </div>

      {/* 2. Right Side: Notifications & User Profile */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notification Bell */}
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
          <Bell className="w-4 h-4" />
        </button>

        {/* User Info */}
        <div className="flex items-center gap-2.5 sm:gap-3 border-l border-gray-200 pl-3 sm:pl-4">
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">
            AM
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-gray-800 leading-tight">Alex Morgan</p>
            <p className="text-[11px] text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
