'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration and redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white md:bg-[#F3F4F6] flex items-center justify-center p-0 md:p-6 lg:p-2 select-none">
      {/* Main Container Card */}
      <div className="w-full max-w-[1120px] bg-white rounded-none md:rounded-3xl shadow-none md:shadow-2xl md:border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
        
        {/* ================= LEFT SIDE: REGISTER FORM ================= */}
        <div className="p-8 sm:p-12 md:p-5 flex flex-col justify-center max-w-md mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Create an account
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-2.5 leading-relaxed">
              Start your  trial with{' '}
              <strong className="text-gray-800 font-semibold">Demo App</strong>. No credit card required.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Full Name Input */}
            <div>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-5 py-3.5 rounded-full border border-gray-300 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>

            {/* Email / Username Input */}
            <div>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3.5 rounded-full border border-gray-300 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>

            {/* Password Input with Show/Hide Toggle */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Create Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-5 py-3.5 pr-12 rounded-full border border-gray-300 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Terms text */}
            <p className="text-[11px] text-gray-500 pt-1 leading-normal">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-black font-semibold hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-black font-semibold hover:underline">
                Privacy Policy
              </a>.
            </p>

            {/* Register Button (Black Pill) */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-black hover:bg-gray-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-gray-400">or continue with</span>
            </div>
          </div>

          {/* Social Icons (Black Circles) */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              className="w-11 h-11 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center text-sm font-bold shadow-xs hover:scale-105 transition-all cursor-pointer"
            >
              G
            </button>

            <button
              type="button"
              className="w-11 h-11 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center text-sm font-bold shadow-xs hover:scale-105 transition-all cursor-pointer"
            >
              t
            </button>

            <button
              type="button"
              className="w-11 h-11 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center text-sm font-bold shadow-xs hover:scale-105 transition-all cursor-pointer"
            >
              f
            </button>
          </div>

          {/* Footer link to Login */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-black hover:underline">
              Log in
            </Link>
          </p>
        </div>

        {/* ================= RIGHT SIDE: HERO ILLUSTRATION CARD ================= */}
        <div className="hidden lg:flex p-0">
          <div className="w-full h-full bg-[#F2FBF6] rounded-tr-3xl rounded-br-3xl p-8 flex flex-col justify-between items-center relative overflow-hidden border border-emerald-100/60">
            
            {/* Top Floating Avatar Badge 1 (Boy) */}
            <div className="absolute top-10 left-12 w-14 h-14 rounded-full bg-white border-2 border-emerald-300/80 shadow-md flex items-center justify-center overflow-hidden z-20 hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-11 h-11">
                <circle cx="50" cy="50" r="45" fill="#E8F8F0" />
                <path d="M50 25 C40 25 35 32 35 45 C35 60 42 70 50 70 C58 70 65 60 65 45 C65 32 60 25 50 25 Z" fill="#FFE0BD" />
                <path d="M48 20 Q55 15 52 28 Q45 23 48 20" fill="#1E293B" />
                <circle cx="45" cy="45" r="2.5" fill="#1E293B" />
                <circle cx="55" cy="45" r="2.5" fill="#1E293B" />
                <path d="M47 54 Q50 58 53 54" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Right Floating Avatar Badge 2 (Girl) */}
            <div className="absolute top-44 right-10 w-13 h-13 rounded-full bg-white border-2 border-emerald-300/80 shadow-md flex items-center justify-center overflow-hidden z-20 hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <circle cx="50" cy="50" r="45" fill="#E8F8F0" />
                <path d="M50 28 C40 28 36 35 36 48 C36 62 42 70 50 70 C58 70 64 62 64 48 C64 35 60 28 50 28 Z" fill="#FFE0BD" />
                <path d="M36 38 C35 25 65 25 64 38 C60 28 40 28 36 38" fill="#1E293B" />
                <circle cx="45" cy="48" r="2.5" fill="#1E293B" />
                <circle cx="55" cy="48" r="2.5" fill="#1E293B" />
                <path d="M47 57 Q50 61 53 57" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Main Center Illustration */}
            <div className="relative flex-1 flex items-center justify-center w-full my-auto z-10 pt-4">
              <svg className="absolute w-72 h-72 text-emerald-200/70 pointer-events-none" viewBox="0 0 200 200" fill="none">
                <path d="M40 80 Q60 30 100 40 Q140 30 160 80 Q190 120 150 160 Q100 190 50 160 Q10 120 40 80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg viewBox="0 0 240 240" className="w-full h-full">
                  <path d="M120 45 C105 45 98 55 98 70 C98 85 108 95 120 95 C132 95 142 85 142 70 C142 55 135 45 120 45 Z" fill="#FFE4C4" stroke="#111827" strokeWidth="3" />
                  <path d="M96 65 C92 40 148 40 144 65 C138 50 102 50 96 65 Z" fill="#111827" />
                  <path d="M96 68 Q90 90 98 100" stroke="#111827" strokeWidth="3" fill="none" />
                  <path d="M144 68 Q150 90 142 100" stroke="#111827" strokeWidth="3" fill="none" />
                  <path d="M110 72 Q114 76 118 72" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M122 72 Q126 76 130 72" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M116 82 Q120 86 124 82" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                  <path d="M102 95 L80 135 Q70 140 60 120 Q55 105 52 110 Q50 125 70 148 L95 155 L95 170 L145 170 L145 155 L170 148 Q190 125 188 110 Q185 105 180 120 Q170 140 160 135 L138 95 Z" fill="#86EFAC" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M120 125 C115 118 107 122 108 128 C109 135 120 142 120 142 C120 142 131 135 132 128 C133 122 125 118 120 125 Z" fill="#FFFFFF" stroke="#111827" strokeWidth="2" />

                  <circle cx="52" cy="108" r="6" fill="#FFE4C4" stroke="#111827" strokeWidth="2.5" />
                  <circle cx="188" cy="108" r="6" fill="#FFE4C4" stroke="#111827" strokeWidth="2.5" />

                  <path d="M95 170 C70 170 50 190 80 200 C110 210 130 210 160 200 C190 190 170 170 145 170 Z" fill="#FFFFFF" stroke="#111827" strokeWidth="3" />
                  <path d="M95 195 Q105 190 115 200 Q105 208 95 195" fill="#FFE4C4" stroke="#111827" strokeWidth="2.5" />
                  <path d="M145 195 Q135 190 125 200 Q135 208 145 195" fill="#FFE4C4" stroke="#111827" strokeWidth="2.5" />
                </svg>
              </div>

             
            </div>

            {/* Bottom Content */}
            <div className="w-full text-center space-y-4 pt-6">
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span className="w-4 h-1.5 rounded-full bg-black" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              </div>

              <h3 className="text-base font-bold text-gray-900 tracking-tight">
                Make your work easier and organized <br />
                with <span className="font-extrabold">Demo App</span>
              </h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

