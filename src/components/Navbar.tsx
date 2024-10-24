import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Code2, Home, Map, Users } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';

const Navbar = () => {
  const location = useLocation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'courses', label: 'Courses', icon: BookOpen, path: '/courses' },
    { id: 'about', label: 'About Us', icon: Users, path: '/about' },
    { id: 'roadmaps', label: 'Development Roadmaps', icon: Map, path: '/roadmaps' },
    { id: 'practice', label: 'Practice', icon: Code2, path: '/practice' },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">AILearn</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = location.pathname === tab.path;
                return (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        isActive
                          ? 'text-indigo-600 bg-indigo-50'
                          : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;