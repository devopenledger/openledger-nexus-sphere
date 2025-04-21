
import React from 'react';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <AuthLayout 
      title="Sign in to your account" 
      description="Enter your credentials below to access your dashboard"
    >
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-openledger-text">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-openledger-primary focus:border-openledger-primary"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-openledger-text">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-openledger-primary focus:border-openledger-primary"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-openledger-primary focus:ring-openledger-primary border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-openledger-primary hover:text-openledger-accent">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <Link to="/dashboard">
            <Button className="w-full bg-openledger-cta hover:bg-blue-600 text-white">
              Sign in
            </Button>
          </Link>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <Button variant="outline" className="w-full">
              Google
            </Button>
          </div>
          <div>
            <Button variant="outline" className="w-full">
              GitHub
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/auth/register" className="font-medium text-openledger-primary hover:text-openledger-accent">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
