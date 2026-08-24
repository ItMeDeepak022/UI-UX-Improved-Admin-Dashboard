'use client';

import React, { useState } from 'react';
import {
  Sliders,
  Shield,
  Bell,
  CreditCard,
  Key,
  Globe,
  Lock,
  Mail,
  Smartphone,
  Check,
  Save,
  AlertTriangle,
  Building,
  ChevronDown,
  Download,
  Trash2,
  Sparkles,
  Calendar,
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);

  // Settings states
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const [workspaceData, setWorkspaceData] = useState({
    workspaceName: 'DemoDash Enterprise',
    supportEmail: 'support@demodash.io',
    timezone: 'UTC-08:00 (Pacific Time)',
    language: 'English (US)',
    dateFormat: 'DD/MM/YYYY',
  });

  const tabs = [
    { id: 'general', label: 'General', icon: Sliders },
    { id: 'security', label: 'Security & 2FA', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto select-none">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Settings & Preferences
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Manage your organization settings, security preferences, and team configurations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {saved && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <Check className="w-3.5 h-3.5" />
              Settings Saved!
            </span>
          )}
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* 2. Navigation Tabs (Pill style matching screenshot theme) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-black text-white shadow-xs'
                  : 'text-gray-600 hover:bg-gray-200/60 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ================= TAB 1: GENERAL SETTINGS ================= */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          {/* Workspace Info Card */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-2xs space-y-5">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Building className="w-4 h-4 text-indigo-600" />
              Organization Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Workspace Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Organization / Company Name
                </label>
                <input
                  type="text"
                  value={workspaceData.workspaceName}
                  onChange={(e) => setWorkspaceData({ ...workspaceData, workspaceName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                />
              </div>

              {/* Support / Contact Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Official Contact / Support Email
                </label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={workspaceData.supportEmail}
                    onChange={(e) => setWorkspaceData({ ...workspaceData, supportEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 pr-10 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  />
                  <Mail className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Timezone */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Timezone
                </label>
                <div className="relative">
                  <select
                    value={workspaceData.timezone}
                    onChange={(e) => setWorkspaceData({ ...workspaceData, timezone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none appearance-none focus:border-indigo-600"
                  >
                    <option value="UTC-08:00 (Pacific Time)">UTC-08:00 (Pacific Time)</option>
                    <option value="UTC-05:00 (Eastern Time)">UTC-05:00 (Eastern Time)</option>
                    <option value="UTC+00:00 (London, GMT)">UTC+00:00 (London, GMT)</option>
                    <option value="UTC+05:30 (India, IST)">UTC+05:30 (India, IST)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Language */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Default Language
                </label>
                <div className="relative">
                  <select
                    value={workspaceData.language}
                    onChange={(e) => setWorkspaceData({ ...workspaceData, language: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none appearance-none focus:border-indigo-600"
                  >
                    <option value="English (US)">English (US)</option>
                    <option value="English (UK)">English (UK)</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Date Format */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Date Format
                </label>
                <div className="relative">
                  <select
                    value={workspaceData.dateFormat}
                    onChange={(e) => setWorkspaceData({ ...workspaceData, dateFormat: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none appearance-none focus:border-indigo-600"
                  >
                    <option value="DD/MM/YYYY">DD/MM/YYYY (e.g. 24/08/2026)</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY (e.g. 08/24/2026)</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD (e.g. 2026-08-24)</option>
                    <option value="DD-MMM-YYYY">DD-MMM-YYYY (e.g. 24-Aug-2026)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: SECURITY & 2FA ================= */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          {/* Two-Factor Authentication */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Shield className="w-4 h-4 text-emerald-600" />
              Two-Factor Authentication (2FA)
            </h2>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-xs font-semibold text-gray-800">
                  Authenticator App (Recommended)
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Use Google Authenticator, Authy, or 1Password to generate one-time codes.
                </p>
              </div>

              {/* Toggle Switch */}
              <button
                onClick={() => setTwoFactor(!twoFactor)}
                className={`sm:w-11 sm:h-6 w-15 h-5 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer ${
                  twoFactor ? 'bg-black' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                    twoFactor ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Lock className="w-4 h-4 text-indigo-600" />
              Change Password
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: NOTIFICATIONS ================= */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-2xs space-y-6">
          <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
            <Bell className="w-4 h-4 text-indigo-600" />
            Notification Preferences
          </h2>

          <div className="divide-y divide-gray-100 space-y-4">
            {/* Email Digests */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Email Digests & Reports</p>
                  <p className="text-[11px] text-gray-500">Receive weekly executive summaries and headcount updates.</p>
                </div>
              </div>
              <button
                onClick={() => setEmailAlerts(!emailAlerts)}
                className={` sm:w-11 sm:h-6 w-15 h-5 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer ${
                  emailAlerts ? 'bg-black' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                    emailAlerts ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Security Alerts */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Security & Sign-in Alerts</p>
                  <p className="text-[11px] text-gray-500">Get notified immediately when a new device signs into your account.</p>
                </div>
              </div>
              <button
                onClick={() => setSecurityAlerts(!securityAlerts)}
                className={` sm:w-11 sm:h-6 w-15 h-5 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer ${
                  securityAlerts ? 'bg-black' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                    securityAlerts ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Mobile Push */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Push Notifications</p>
                  <p className="text-[11px] text-gray-500">Receive in-browser and mobile push notifications for urgent alerts.</p>
                </div>
              </div>
              <button
                onClick={() => setPushNotifications(!pushNotifications)}
                className={` sm:w-11 sm:h-6 w-15 h-5 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer ${
                  pushNotifications ? 'bg-black' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                    pushNotifications ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Danger Zone (Bottom) */}
      <div className="bg-rose-50/50 rounded-2xl border border-rose-200/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Danger Zone
          </h3>
          <p className="text-[11px] text-rose-700 mt-0.5">
            Permanently delete this workspace and all associated analytics data.
          </p>
        </div>
        <button
          type="button"
          onClick={() => confirm('Are you sure you want to delete this workspace?')}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
        >
          Delete Workspace
        </button>
      </div>

    </div>
  );
}
