'use client';
import React from 'react';
import { DollarSign, Users, ShoppingBag, TrendingUp } from 'lucide-react';
import UserStatusChart from '@/components/dashComponet/UserStatusChart';
import UserRegistrationChart from '@/components/dashComponet/UserRegistrationchart';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      icon: DollarSign,
      color: 'bg-emerald-500',
    },
    {
      title: 'Total Users',
      value: '1,240',
      icon: Users,
      color: 'bg-indigo-600',
    },
    {
      title: 'Total Sales',
      value: '3,450',
      icon: ShoppingBag,
      color: 'bg-purple-600',
    },
    {
      title: 'Growth Rate',
      value: '+12.5%',
      icon: TrendingUp,
      color: 'bg-amber-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-xs text-gray-500 mt-1">
          Welcome to your admin panel overview.
        </p>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  {item.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  {item.value}
                </h3>
              </div>
              <div className={`p-2.5 rounded-xl text-white ${item.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-2xs">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Recent Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 font-semibold uppercase">
                <th className="py-2.5">Name</th>
                <th className="py-2.5">Email</th>
                <th className="py-2.5">Role</th>
                <th className="py-2.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3 font-semibold text-gray-900">
                  Alex Morgan
                </td>
                <td className="py-3 text-gray-500">alex@demodash.io</td>
                <td className="py-3 text-gray-700 font-medium">Admin</td>
                <td className="py-3">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] px-2 py-0.5 rounded-md font-semibold">
                    Active
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-gray-900">
                  Sarah Connor
                </td>
                <td className="py-3 text-gray-500">sarah@gmail.com</td>
                <td className="py-3 text-gray-700 font-medium">Editor</td>
                <td className="py-3">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] px-2 py-0.5 rounded-md font-semibold">
                    Active
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-gray-900">David Kim</td>
                <td className="py-3 text-gray-500">david@yahoo.com</td>
                <td className="py-3 text-gray-700 font-medium">User</td>
                <td className="py-3">
                  <span className="bg-gray-100 text-gray-600 text-[11px] px-2 py-0.5 rounded-md font-semibold">
                    Offline
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 gap-5 grid sm:grid-cols-2 grid-cols-1   ">
        <UserStatusChart />

        <UserRegistrationChart />
      </div>
    </div>
  );
}
