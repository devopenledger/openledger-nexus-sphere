
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const AdminTransactions = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="Transaction Management" description="Monitor platform transactions and activity" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search transactions..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Types</option>
              <option>Purchase</option>
              <option>Sale</option>
              <option>Transfer</option>
              <option>Staking</option>
              <option>Reward</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Tokens</option>
              <option>OLI</option>
              <option>PRJ</option>
              <option>RSC</option>
              <option>CMP</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Statuses</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
        </div>
        
        {/* Transactions Table */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    To
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array(15).fill(null).map((_, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-openledger-text font-mono">
                        tx-{Math.random().toString(36).substring(2, 10)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index % 5 === 0 
                          ? 'bg-green-100 text-green-800' 
                          : index % 5 === 1 
                            ? 'bg-red-100 text-red-800' 
                            : index % 5 === 2
                              ? 'bg-blue-100 text-blue-800'
                              : index % 5 === 3
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {index % 5 === 0 ? 'Purchase' : index % 5 === 1 ? 'Sale' : index % 5 === 2 ? 'Transfer' : index % 5 === 3 ? 'Staking' : 'Reward'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200"></div>
                        <div className="ml-3 text-sm text-openledger-text">
                          {index % 5 === 0 ? 'System' : `User ${index + 5}`}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200"></div>
                        <div className="ml-3 text-sm text-openledger-text">
                          {`User ${index + 2}`}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <span className="text-openledger-text font-medium">
                          {(index + 1) * 250} 
                        </span>
                        <span className="text-openledger-primary ml-1">
                          {['OLI', 'PRJ', 'RSC', 'CMP', 'DAT'][index % 5]}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        ${(((index + 1) * 250) * (0.40 + (index % 5) * 0.1)).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        Apr {20 - (index % 20)}, 2024
                      </div>
                      <div className="text-xs text-gray-500">
                        {Math.floor(Math.random() * 24)}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')} UTC
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index % 10 === 0 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : index % 20 === 1 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                      }`}>
                        {index % 10 === 0 ? 'Pending' : index % 20 === 1 ? 'Failed' : 'Completed'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" className="text-openledger-primary">
                        View
                      </Button>
                      {index % 10 === 0 && (
                        <>
                          <Button variant="ghost" className="text-green-600">
                            Approve
                          </Button>
                          <Button variant="ghost" className="text-red-600">
                            Reject
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">15</span> of <span className="font-medium">2,453</span> transactions
          </div>
          <div className="flex">
            <Button variant="outline" className="mr-2">&laquo; Previous</Button>
            <Button variant="outline" className="mr-2 bg-openledger-primary text-white">1</Button>
            <Button variant="outline" className="mr-2">2</Button>
            <Button variant="outline" className="mr-2">3</Button>
            <Button variant="outline" className="mr-2">...</Button>
            <Button variant="outline" className="mr-2">164</Button>
            <Button variant="outline">Next &raquo;</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTransactions;
