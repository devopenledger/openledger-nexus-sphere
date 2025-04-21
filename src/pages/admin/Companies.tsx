
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const AdminCompanies = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="Company Management" description="Review and manage registered companies" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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
              <option>Research</option>
              <option>Software</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Verified</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
        
        {/* Companies Table */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Industry
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Token
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array(8).fill(null).map((_, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
                          Logo
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-openledger-text">
                            Company {index + 1}
                          </div>
                          <div className="text-xs text-gray-500">
                            Registered: {['Jan', 'Feb', 'Mar', 'Apr'][index % 4]} {2022 + (index % 3)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200"></div>
                        <div className="ml-3 text-sm text-openledger-text">
                          User {index + 3}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index % 3 === 0 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : index % 3 === 1 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {index % 3 === 0 ? 'Pending' : index % 3 === 1 ? 'Verified' : 'Suspended'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index % 4 === 0 
                          ? 'bg-purple-100 text-purple-800' 
                          : index % 4 === 1 
                            ? 'bg-blue-100 text-blue-800' 
                            : index % 4 === 2
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}>
                        {index % 4 === 0 ? 'Blockchain' : index % 4 === 1 ? 'Fintech' : index % 4 === 2 ? 'Research' : 'Software'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-openledger-text">
                        {index % 3 === 1 ? (
                          <>
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-openledger-primary to-openledger-accent flex items-center justify-center text-white text-xs font-bold">
                                C{index+1}
                              </div>
                              <span className="ml-2">CMP{index+1}</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Market Cap: ${(index + 1) * 250}K
                            </div>
                          </>
                        ) : (
                          <span className="text-gray-500">No token</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" className="text-openledger-primary">
                        View
                      </Button>
                      {index % 3 === 0 && (
                        <>
                          <Button variant="ghost" className="text-green-600">
                            Verify
                          </Button>
                          <Button variant="ghost" className="text-red-600">
                            Reject
                          </Button>
                        </>
                      )}
                      {index % 3 === 1 && (
                        <Button variant="ghost" className="text-red-600">
                          Suspend
                        </Button>
                      )}
                      {index % 3 === 2 && (
                        <Button variant="ghost" className="text-green-600">
                          Reinstate
                        </Button>
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">42</span> results
          </div>
          <div className="flex">
            <Button variant="outline" className="mr-2">&laquo; Previous</Button>
            <Button variant="outline" className="mr-2 bg-openledger-primary text-white">1</Button>
            <Button variant="outline" className="mr-2">2</Button>
            <Button variant="outline" className="mr-2">3</Button>
            <Button variant="outline" className="mr-2">4</Button>
            <Button variant="outline" className="mr-2">5</Button>
            <Button variant="outline">Next &raquo;</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanies;
