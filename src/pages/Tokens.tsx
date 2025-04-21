
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Tokens = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title="Tokens" description="Explore and trade research and company tokens" />
      
      <main className="flex-1 bg-openledger-background">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tokens..."
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
                <option>Project Tokens</option>
                <option>Company Tokens</option>
                <option>Governance Tokens</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
                <option>Sort By: Market Cap</option>
                <option>Sort By: Price</option>
                <option>Sort By: Volume</option>
              </select>
            </div>
          </div>

          {/* Tokens Table */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Token
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      24h Change
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Market Cap
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Volume (24h)
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array(10).fill(null).map((_, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-openledger-primary to-openledger-accent rounded-full flex items-center justify-center text-white">
                            {String.fromCharCode(65 + index)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-openledger-text">
                              {['OLI', 'BTC', 'PRJ', 'RSC', 'CMP', 'GOV', 'RES', 'NET', 'DAT', 'AI'][index]}
                            </div>
                            <div className="text-sm text-gray-500">
                              {['Openledger', 'Bitcoin', 'Project Token', 'Research', 'Company', 'Governance', 'Resource', 'Network', 'Data', 'AI'][index]}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-openledger-text">${(index + 1) * 2.35}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm ${index % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {index % 2 === 0 ? '+' : '-'}{index + 1}.{(index * 7) % 10}%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-openledger-text">${(index + 1) * 10}M</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-openledger-text">${(index + 1) * 2.5}M</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="outline" className="text-openledger-primary border-openledger-primary hover:bg-openledger-primary hover:text-white">
                          Trade
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

export default Tokens;
