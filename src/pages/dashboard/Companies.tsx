
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DashboardCompanies = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="My Companies" description="Manage your registered companies and startups" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-6">
          <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
            Register New Company
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                  Logo
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-openledger-text">Blockchain Research Labs</h3>
                  <p className="text-sm text-gray-500">Established: Jan 2022</p>
                </div>
              </div>
              <div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Company Info</h4>
              <p className="text-sm text-gray-600">
                A research company focused on blockchain innovations for scientific applications and open data.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Token</h4>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-openledger-primary to-openledger-accent flex items-center justify-center text-white text-xs font-bold">
                  BRL
                </div>
                <div className="ml-2">
                  <div className="text-sm font-medium text-openledger-text">BRLC Token</div>
                  <div className="text-xs text-gray-500">Current value: $2.35</div>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Team</h4>
              <div className="flex -space-x-2">
                {Array(4).fill(null).map((_, index) => (
                  <div key={index} className="w-8 h-8 rounded-full ring-2 ring-white bg-gray-300"></div>
                ))}
                <div className="w-8 h-8 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center text-gray-500 text-xs">
                  +3
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2 justify-end">
              <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                Edit
              </Button>
              <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
                Manage
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 border-dashed border-2 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 mb-4">
              +
            </div>
            <h3 className="text-lg font-medium text-openledger-text mb-2">Register a New Company</h3>
            <p className="text-sm text-gray-500 mb-6 max-w-sm">
              Create a company profile, issue tokens, and connect with investors and collaborators.
            </p>
            <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
              Get Started
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardCompanies;
