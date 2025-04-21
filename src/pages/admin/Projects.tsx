
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const AdminProjects = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="Project Management" description="Review and manage platform projects" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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
              <option>AI</option>
              <option>Data Science</option>
              <option>Biotech</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
        
        {/* Projects Table */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Creator
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Funding
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array(10).fill(null).map((_, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-openledger-text">
                            Project {index + 1}
                          </div>
                          <div className="text-xs text-gray-500">
                            Created: {['Jan', 'Feb', 'Mar', 'Apr', 'May'][index % 5]} {(index % 30) + 1}, 2024
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200"></div>
                        <div className="ml-3 text-sm text-openledger-text">
                          User {index + 5}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index % 4 === 0 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : index % 4 === 1 
                            ? 'bg-green-100 text-green-800' 
                            : index % 4 === 2
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-red-100 text-red-800'
                      }`}>
                        {index % 4 === 0 ? 'Pending' : index % 4 === 1 ? 'Active' : index % 4 === 2 ? 'Completed' : 'Rejected'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index % 3 === 0 
                          ? 'bg-purple-100 text-purple-800' 
                          : index % 3 === 1 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                      }`}>
                        {index % 3 === 0 ? 'Blockchain' : index % 3 === 1 ? 'AI' : 'Biotech'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-openledger-text">
                        {(index + 1) * 5000} OLI
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-1.5 mt-1">
                        <div className="bg-openledger-primary h-1.5 rounded-full" style={{ width: `${(index + 3) * 10}%` }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" className="text-openledger-primary">
                        View
                      </Button>
                      {index % 4 === 0 && (
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">128</span> results
          </div>
          <div className="flex">
            <Button variant="outline" className="mr-2">&laquo; Previous</Button>
            <Button variant="outline" className="mr-2 bg-openledger-primary text-white">1</Button>
            <Button variant="outline" className="mr-2">2</Button>
            <Button variant="outline" className="mr-2">3</Button>
            <Button variant="outline" className="mr-2">...</Button>
            <Button variant="outline" className="mr-2">13</Button>
            <Button variant="outline">Next &raquo;</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjects;
