
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title="Marketplace" description="Trade tokens, services, and intellectual property" />
      
      <main className="flex-1 bg-openledger-background">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {['All', 'Tokens', 'Services', 'IP Assets', 'Datasets', 'Software', 'Research'].map((category) => (
              <Button 
                key={category} 
                variant={category === 'All' ? "default" : "outline"}
                className={category === 'All' ? "bg-openledger-primary text-white" : "text-openledger-text"}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center my-8">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search marketplace..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
                <option>Sort By: Latest</option>
                <option>Sort By: Price</option>
                <option>Sort By: Popular</option>
              </select>
            </div>
          </div>

          {/* Featured Items */}
          <h2 className="text-2xl font-bold text-openledger-text mb-6">Featured Items</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-openledger-primary to-openledger-accent flex items-center justify-center text-white">
                  Featured Item Image
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-openledger-text">Premium Item {index + 1}</h3>
                    <span className="bg-openledger-primary/20 text-openledger-primary text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    High-quality marketplace item with premium features and benefits.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-openledger-text">{(index + 1) * 1000} OLI</span>
                    <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
                      Purchase
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Items */}
          <h2 className="text-2xl font-bold text-openledger-text mt-12 mb-6">All Items</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array(8).fill(null).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  Item Image
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-md font-bold text-openledger-text">Marketplace Item {index + 5}</h3>
                    <span className="bg-openledger-accent/20 text-openledger-accent text-xs px-2 py-1 rounded-full">
                      {['Token', 'Service', 'IP', 'Dataset'][index % 4]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Description of this marketplace item and its benefits.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-openledger-text">{(index + 1) * 250} OLI</span>
                    <Button className="bg-openledger-cta hover:bg-blue-600 text-white text-sm">
                      Purchase
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

export default Marketplace;
