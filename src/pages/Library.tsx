
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Library = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title="Technical Library" description="Access research papers, technical documents, and industry insights" />
      
      <main className="flex-1 bg-openledger-background">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search papers..."
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
                <option>Finance</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
                <option>Sort By: Latest</option>
                <option>Sort By: Popular</option>
                <option>Sort By: Citations</option>
              </select>
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array(9).fill(null).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex space-x-2 mb-2">
                  <span className="bg-openledger-primary/20 text-openledger-primary text-xs px-2 py-1 rounded-full">
                    {['Blockchain', 'AI', 'Finance'][index % 3]}
                  </span>
                  <span className="bg-openledger-accent/20 text-openledger-accent text-xs px-2 py-1 rounded-full">
                    {['Research', 'White Paper', 'Technical'][index % 3]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-openledger-text mb-2">
                  Technical Paper Title {index + 1}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Authors: Researcher A, Researcher B, Researcher C
                </p>
                <p className="text-gray-600 mb-6">
                  This technical paper explores innovative approaches to solving complex problems in the field of distributed systems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Published: Jan {(index + 1) * 3}, 2024
                  </div>
                  <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
                    Read Paper
                  </Button>
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

export default Library;
