import { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import ProfessionalAdminDashboard from './ProfessionalAdminDashboard';
import AdminDebug from './AdminDebug';

// Debug logging
console.log('AdminWrapper loaded');

const AdminWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [debugMode, setDebugMode] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    
    // Check for debug mode
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('debug') === 'true') {
      setDebugMode(true);
    }
    
    setIsLoading(false);
  }, []);

  const handleLogin = (authenticated: boolean) => {
    setIsAuthenticated(authenticated);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#89D3EC]"></div>
      </div>
    );
  }

  console.log('AdminWrapper render - isAuthenticated:', isAuthenticated, 'debugMode:', debugMode);

  // Debug mode - show debug panel
  if (debugMode) {
    return <AdminDebug />;
  }

  return (
    <>
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <ProfessionalAdminDashboard onLogout={handleLogout} />
      )}
    </>
  );
};

export default AdminWrapper;