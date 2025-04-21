
import React from 'react';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <AuthLayout 
      title="Create your account" 
      description="Join Openledger Institute to connect with researchers, entrepreneurs, and investors"
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-openledger-text">
              First name
            </label>
            <div className="mt-1">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-openledger-primary focus:border-openledger-primary"
                placeholder="First name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-openledger-text">
              Last name
            </label>
            <div className="mt-1">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-openledger-primary focus:border-openledger-primary"
                placeholder="Last name"
              />
            </div>
          </div>
        </div>

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
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-openledger-primary focus:border-openledger-primary"
              placeholder="Create a password"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password-confirm" className="block text-sm font-medium text-openledger-text">
            Confirm password
          </label>
          <div className="mt-1">
            <input
              id="password-confirm"
              name="password-confirm"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-openledger-primary focus:border-openledger-primary"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <div>
          <label htmlFor="user-type" className="block text-sm font-medium text-openledger-text">
            I am a
          </label>
          <div className="mt-1">
            <select
              id="user-type"
              name="user-type"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-openledger-primary focus:border-openledger-primary"
            >
              <option value="researcher">Researcher</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="investor">Investor</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-openledger-primary focus:ring-openledger-primary border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{' '}
            <a href="#" className="font-medium text-openledger-primary hover:text-openledger-accent">
              terms and conditions
            </a>
            {' '}and{' '}
            <a href="#" className="font-medium text-openledger-primary hover:text-openledger-accent">
              privacy policy
            </a>
          </label>
        </div>

        <div>
          <Link to="/dashboard">
            <Button className="w-full bg-openledger-cta hover:bg-blue-600 text-white">
              Create account
            </Button>
          </Link>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/auth/login" className="font-medium text-openledger-primary hover:text-openledger-accent">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
