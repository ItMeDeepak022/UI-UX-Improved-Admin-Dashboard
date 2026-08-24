import React from 'react';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 bg-white border-t border-gray-200 text-center sm:py-5 px-6 py-3 text-xs text-gray-500">
      <p>&copy; {new Date().getFullYear()} DemoDashboard All rights reserved.</p>
       
    </footer>
  );
}
