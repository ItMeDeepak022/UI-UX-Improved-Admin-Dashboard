'use client';

import React, { useState } from 'react';
import { Users, UserPlus, Search, Filter } from 'lucide-react';

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'Alex Morgan',
      email: 'alex@demodash.io',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Sarah Connor',
      email: 'sarah@gmail.com',
      role: 'Editor',
      status: 'Active',
    },
    {
      id: 3,
      name: 'David Kim',
      email: 'david@yahoo.com',
      role: 'User',
      status: 'Offline',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      email: 'elena@novadesign.co',
      role: 'Designer',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Marcus Brody',
      email: 'marcus@brodystudios.com',
      role: 'Developer',
      status: 'Pending',
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-5 select-none">
      {/* 1. Header (Title + Add User Button) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-600" />
            Users Management
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Manage your registered team members, roles, and account access.
          </p>
        </div>

        
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 sm:p-4 bg-white rounded-xl border border-gray-200/90 shadow-2xs">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, email, role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-lg border border-gray-200 outline-none focus:border-indigo-600 focus:bg-white transition-all"
          />
        </div>

         
      </div>

      {/* 3. Fully Responsive Table Card */}
      <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden">
        {/* Horizontal Scroll Wrapper for Mobile */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[620px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/60 text-gray-400 text-[11px] font-semibold uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-6">Name</th>
                <th className="py-3.5 px-4 sm:px-6">Email</th>
                <th className="py-3.5 px-4 sm:px-6">Role</th>
                <th className="py-3.5 px-4 sm:px-6">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => {
                  const initials = user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('');

                  return (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50/70 transition-colors"
                    >
                      {/* Name + Avatar */}
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-gray-900 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px] shadow-2xs flex-shrink-0">
                            {initials}
                          </div>
                          <span>{user.name}</span>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="py-3.5 px-4 sm:px-6 text-gray-500 whitespace-nowrap">
                        {user.email}
                      </td>

                      {/* Role */}
                      <td className="py-3.5 px-4 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-[11px]">
                          {user.role}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                            user.status === 'Active'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : user.status === 'Pending'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : 'bg-gray-100 text-gray-600 border-gray-200'
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-xs text-gray-400">
                    No users found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
