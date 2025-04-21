
import React from 'react';
import { Logo } from '../ui/logo';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-sm text-gray-500">
              A global decentralized research institute connecting researchers, entrepreneurs, and investors.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/projects" className="text-base text-gray-500 hover:text-openledger-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-base text-gray-500 hover:text-openledger-primary">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/tokens" className="text-base text-gray-500 hover:text-openledger-primary">
                  Tokens
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-base text-gray-500 hover:text-openledger-primary">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/library" className="text-base text-gray-500 hover:text-openledger-primary">
                  Library
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-openledger-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-openledger-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-openledger-primary">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-openledger-primary">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-openledger-primary">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-openledger-primary">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Openledger Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
