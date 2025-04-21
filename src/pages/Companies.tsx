
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Companies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title="Companies" description="Explore innovative companies in our ecosystem" />
      
      <main className="flex-1 bg-openledger-background">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
                <option>All Industries</option>
                <option>Blockchain</option>
                <option>Fintech</option>
                <option>Biotech</option>
                <option>SaaS</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
                <option>Sort By: Latest</option>
                <option>Sort By: Market Cap</option>
                <option>Sort By: Popular</option>
              </select>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array(9).fill(null).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500 font-bold text-xl">Company Logo</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-openledger-text">Company Name {index + 1}</h3>
                    <span className="bg-openledger-accent/20 text-openledger-accent text-xs px-2 py-1 rounded-full">
                      {['Blockchain', 'Fintech', 'Biotech'][index % 3]}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600">
                    A brief description about what this company does and its mission. Innovation begins here.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-openledger-text">Token:</span>
                      <span className="ml-2 bg-openledger-primary/20 text-openledger-primary text-xs px-2 py-1 rounded-full">
                        CMP-{index + 1}
                      </span>
                    </div>
                    <div className="ml-4 text-sm">
                      <span className="font-medium text-openledger-text">$4.{index + 1}</span>
                      <span className="ml-1 text-green-500">+{index + 1}%</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-openledger-cta hover:bg-blue-600 text-white">
                      Company Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center">
              <Button variant="outline" className="mr-2">&laquo; Previous</Button>
              <Button variant="outline" className="mr-2 bg-openledger-primary text-white">1</Button>
              <Button variant="outline" className="mr-2">2</Button>
              <Button variant="outline" className="mr-2">3</Button>
              <Button variant="outline">Next &raquo;</Button>
            </nav>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Companies;
