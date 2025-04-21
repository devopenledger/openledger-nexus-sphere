
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title="Projects" description="Discover and invest in innovative research projects" />
      
      <main className="flex-1 bg-openledger-background">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
                <option>All Categories</option>
                <option>Blockchain</option>
                <option>AI & ML</option>
                <option>Biotech</option>
                <option>Sustainability</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
                <option>Sort By: Latest</option>
                <option>Sort By: Funding</option>
                <option>Sort By: Popular</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array(9).fill(null).map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-openledger-text">Project Name {index + 1}</h3>
                    <span className="bg-openledger-primary/20 text-openledger-primary text-xs px-2 py-1 rounded-full">
                      {['Blockchain', 'AI & ML', 'Biotech'][index % 3]}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-500">Researcher Name</span>
                  </div>
                  <p className="mt-4 text-gray-600 line-clamp-3">
                    This project aims to revolutionize the field by implementing innovative solutions to long-standing challenges.
                  </p>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-openledger-primary h-2 rounded-full" style={{ width: `${(index + 1) * 10}%` }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="font-bold text-openledger-text">{(index + 1) * 10}% Funded</span>
                      <span className="text-gray-500">{(index + 1) * 50},000 / 500,000 OLI</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-openledger-cta hover:bg-blue-600 text-white">
                      View Details
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

export default Projects;
