
import React from 'react';
import { Logo } from '../ui/logo';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-openledger-background">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Logo size="lg" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-openledger-text">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {description}
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-openledger-primary hover:text-openledger-accent">
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
}
