import React from 'react';
import { Users, UserPlus } from 'lucide-react';

export default function UsersPage() {
  const users = [
    { id: 1, name: 'Alex Morgan', email: 'alex@demodash.io', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sarah Connor', email: 'sarah@gmail.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'David Kim', email: 'david@yahoo.com', role: 'User', status: 'Offline' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-sm text-gray-500">Manage all registered users and team members.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add User
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-400 text-xs uppercase">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-3 font-semibold text-gray-800">{user.name}</td>
                <td className="py-3 text-gray-500">{user.email}</td>
                <td className="py-3 text-gray-700">{user.role}</td>
                <td className="py-3">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
