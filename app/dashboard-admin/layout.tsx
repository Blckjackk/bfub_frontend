'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Sidebar from '@/components/dashboard-admin/Sidebar';
import ConfirmationDialog from '@/components/dashboard-admin/ConfirmationDialog';
import AuthWrapper from "@/components/auth/AuthWrapper";

export default function AdminLayout({ children }: { children: React.ReactNode; }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    console.log("Berhasil logout!");
    // Hapus data dari localStorage
    localStorage.removeItem("session_token");
    localStorage.removeItem("user_data");
    localStorage.removeItem("user_role");
    
    setShowLogoutModal(false);
    router.push('/login');
  };

  return (
    <AuthWrapper requiredRole="admin">
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar onLogoutClick={() => setShowLogoutModal(true)} />

        <main className={`flex-1 p-8 transition-all duration-300 ${showLogoutModal ? 'blur-sm pointer-events-none' : ''}`}>
          {children}
        </main>

        {/* 👇 PERUBAHAN DI SINI 👇 */}
        <ConfirmationDialog
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
          title="Konfirmasi Logout"
          message="Apakah kamu yakin mau logout?"
        />
      </div>
    </AuthWrapper>
  );
}