
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui/logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Companies', path: '/companies' },
  { name: 'Tokens', path: '/tokens' },
  { name: 'Library', path: '/library' },
  { name: 'Marketplace', path: '/marketplace' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo size="md" />
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-openledger-primary font-bold'
                      : 'text-openledger-text hover:text-openledger-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="ml-6 flex items-center space-x-2">
              <Link to="/auth/login">
                <Button variant="ghost" className="text-openledger-text hover:text-openledger-primary">
                  Login
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-openledger-text hover:text-openledger-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-3 px-4 shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-openledger-primary font-bold'
                    : 'text-openledger-text hover:text-openledger-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 flex flex-col space-y-2">
            <Link to="/auth/login" className="w-full" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full text-openledger-text">
                Login
              </Button>
            </Link>
            <Link to="/auth/register" className="w-full" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-openledger-cta hover:bg-blue-600 text-white">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
