'use client';

import React, { useState } from 'react';
import Siderbar from '@/components/dashComponet/Siderbar';
import Header from '@/components/dashComponet/Header';
import Footer from '@/components/dashComponet/Footer';

export default function DashboardLayout({ children }) {
  // Mobile slider show/hide state
  const [show, setshow] = useState(false);
  const showhide = () => setshow(!show);

  return (
    <div className="flex min-h-screen bg-[#F4F5F7] text-gray-900">
      {/* 1. Sidebar (Desktop + Mobile Slide with translate-x) */}
      <Siderbar show={show} setshow={setshow} />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header with mobile hamburger toggle */}
        <Header showhide={showhide} />

        {/* Page Content */}
        <main className="flex-1 sm:p-6 p-4">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
