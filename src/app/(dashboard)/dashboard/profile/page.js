'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Check,
  Calendar,
  Sparkles,
  UploadCloud,
  ChevronDown,
  User,
} from 'lucide-react';

export default function ProfilePage() {
  const [activeStep, setActiveStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    pronounTypes: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    gender: '',
    dob: '',
    maritalStatus: '',
    bloodGroup: '',
    nationality: '',
    languages: '',
    address: '',
  });

  let resetform = () => {
    setFormData({
      pronounTypes: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      gender: '',
      dob: '',
      maritalStatus: '',
      bloodGroup: '',
      nationality: '',
      languages: '',
      address: '',
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-6 max-w-[1300px] mx-auto select-none">
      {/* 1. Header with Back Button */}
      <div className="flex items-center gap-3 pb-5">
        <Link
          href="/dashboard"
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
          title="Go Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Add New Employee
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Enter the details to create a new employee profile
          </p>
        </div>
      </div>

      {/* 3. Main Form Container Card */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-2xs space-y-6">
        {/* Top Grid: Form Inputs (Left) + Profile Photo Box (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Left Form (3 Columns on desktop) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Employee Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Pronouns Type <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.pronounTypes}
                  onChange={(e) =>
                    setFormData({ ...formData, pronounTypes: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none appearance-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                >
                  <option >Select</option>
                  <option value="Full Time">Mr</option>
                  <option value="Part Time">Mrs</option>
                  <option value="Contract">He/Him</option>
                  <option value="Internship">She/her</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                First Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.mobileNumber}
                onChange={(e) =>
                  setFormData({ ...formData, mobileNumber: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
              />
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email ID <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white rounded-lg border-2 border-indigo-500 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Right Profile Photo Upload Box */}
          <div className="flex flex-col items-center justify-center p-2 text-center">
            <label className="cursor-pointer group relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {/* Photo Frame */}
              <div className="w-36 h-36 rounded-full border-2  border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden group-hover:border-indigo-500 transition-colors">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Uploaded Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Avatar Silhouette SVG */
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden group">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-[75%] h-[75%] text-gray-400 group-hover:text-gray-500 transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Head */}
                      <circle cx="50" cy="32" r="16" fill="#D1D5DB" />

                      {/* Body */}
                      <path
                        d="M18 100
         C18 78 32 65 50 65
         C68 65 82 78 82 100
         Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </label>

            <span className="text-[10px] text-gray-400 mt-2 font-medium">
              Upload JPG, PNG, or JPEG (max 5MB)
            </span>
          </div>
        </div>

        {/* Checkbox: Send profile form via email */}
        {/* <div className="pt-2">
          <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={sendEmailInvite}
              onChange={(e) => setSendEmailInvite(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>
              Send a profile form to the employee via email to complete their
              details
            </span>
          </label>
        </div> */}

        {/* Middle / Bottom Grid: Details + Address */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Column 1 */}
          <div className="space-y-4">
            {/* Gender */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Gender
              </label>
              <div className="relative">
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-700 outline-none appearance-none focus:border-indigo-600"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Marital Status */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Marital Status
              </label>
              <div className="relative">
                <select
                  value={formData.maritalStatus}
                  onChange={(e) =>
                    setFormData({ ...formData, maritalStatus: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-700 outline-none appearance-none focus:border-indigo-600"
                >
                  <option value="">Select marital status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Nationality
              </label>
              <div className="relative">
                <select
                  value={formData.nationality}
                  onChange={(e) =>
                    setFormData({ ...formData, nationality: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-700 outline-none appearance-none focus:border-indigo-600"
                >
                  <option value="">Select here</option>
                  <option value="American">American</option>
                  <option value="Indian">Indian</option>
                  <option value="British">British</option>
                  <option value="Canadian">Canadian</option>
                  <option value="German">German</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {/* Date of Birth */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Date of Birth
              </label>
              <div className="relative flex items-center">
                <input
                  type="date"
                  placeholder="DD/MM/YYYY"
                  value={formData.dob}
                  onChange={(e) =>
                    setFormData({ ...formData, dob: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 pr-10 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600"
                />
                {/* <Calendar className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" /> */}
              </div>
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Blood Group
              </label>
              <div className="relative">
                <select
                  value={formData.bloodGroup}
                  onChange={(e) =>
                    setFormData({ ...formData, bloodGroup: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-700 outline-none appearance-none focus:border-indigo-600"
                >
                  <option value="">Select here</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Languages Known */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Languages Known
              </label>
              <div className="relative">
                <select
                  value={formData.languages}
                  onChange={(e) =>
                    setFormData({ ...formData, languages: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-700 outline-none appearance-none focus:border-indigo-600"
                >
                  <option value="">Add known languages</option>
                  <option value="English, Spanish">English, Spanish</option>
                  <option value="English, Hindi">English, Hindi</option>
                  <option value="English, French">English, French</option>
                  <option value="English, German">English, German</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Column 3: Address Textarea spanning full height */}
          <div className="flex flex-col">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Address
            </label>
            <textarea
              rows={7}
              placeholder="Enter address here"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full flex-1 p-3.5 bg-white rounded-lg border border-gray-300 text-xs text-gray-800 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 resize-none"
            />
          </div>
        </div>

        {/* 4. Footer Action Buttons (Cancel, Save as Draft, Save & Continue) */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-gray-100">
          {/* Cancel */}
          <button
            type="button"
            className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          {/* Save as Draft */}
          <button
          onClick={resetform}
            type="button"
            className="px-5 py-2.5 rounded-lg border-2 border-indigo-600 text-indigo-600 text-xs font-semibold hover:bg-indigo-50 transition-colors"
          >
            Reset
          </button>

          {/* Save & Continue */}
          <button
            type="button"
            className="px-6 py-2.5 rounded-lg bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
