
import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Logo } from '../ui/logo';
import { Button } from '@/components/ui/button';
import {
  Home,
  Wallet,
  Heart,
  FileText,
  Building,
  Users,
  LogOut,
  MenuIcon,
  X
} from 'lucide-react';

const sidebarItems = [
  { name: 'Dashboard', path: '/dashboard', icon: Home },
  { name: 'Wallet', path: '/dashboard/wallet', icon: Wallet },
  { name: 'Favorites', path: '/dashboard/favorites', icon: Heart },
  { name: 'My Projects', path: '/dashboard/projects', icon: FileText },
  { name: 'My Companies', path: '/dashboard/companies', icon: Building },
  { name: 'Networking', path: '/dashboard/networking', icon: Users },
];

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/dashboard' && location.pathname.startsWith(path));
  };

  return (
    <div className="h-screen flex overflow-hidden bg-openledger-background">
      {/* Mobile sidebar */}
      <div className={`md:hidden fixed inset-0 z-40 flex ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <Logo size="sm" />
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive(item.path)
                      ? 'bg-openledger-primary text-white'
                      : 'text-openledger-text hover:bg-openledger-background hover:text-openledger-primary'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${isActive(item.path) ? 'text-white' : 'text-openledger-text group-hover:text-openledger-primary'}`} />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <Link to="/" className="flex-shrink-0 group block">
              <Button variant="ghost" className="w-full flex justify-start text-openledger-text">
                <LogOut className="mr-3 h-5 w-5" />
                Sign out
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 w-14">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Logo size="sm" />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive(item.path)
                        ? 'bg-openledger-primary text-white'
                        : 'text-openledger-text hover:bg-openledger-background hover:text-openledger-primary'
                    }`}
                  >
                    <item.icon className={`mr-3 h-5 w-5 ${isActive(item.path) ? 'text-white' : 'text-openledger-text group-hover:text-openledger-primary'}`} />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <Link to="/" className="flex-shrink-0 w-full group block">
                <Button variant="ghost" className="w-full flex justify-start text-openledger-text">
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-openledger-primary"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
