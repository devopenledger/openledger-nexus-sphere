
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const AdminUsers = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="User Management" description="Manage platform users and permissions" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Roles</option>
              <option>Researchers</option>
              <option>Entrepreneurs</option>
              <option>Investors</option>
              <option>Admins</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
            <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
              Add User
            </Button>
          </div>
        </div>
        
        {/* Users Table */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
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
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-openledger-text">
                            User {index + 1}
                          </div>
                          <div className="text-sm text-gray-500">
                            user{index + 1}@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-openledger-text">
                        {['Researcher', 'Entrepreneur', 'Investor', 'Admin'][index % 4]}
                      </div>
                      {index % 4 === 3 && (
                        <div className="text-xs text-red-500">
                          Admin privileges
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index % 5 === 0 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : index % 5 === 1 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                      }`}>
                        {index % 5 === 0 ? 'Pending' : index % 5 === 1 ? 'Suspended' : 'Active'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May'][index % 5]} {2022 + (index % 3)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {index % 3 === 0 ? 'Last seen today' : index % 3 === 1 ? 'Last week' : '3 weeks ago'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" className="text-openledger-primary">
                        Edit
                      </Button>
                      {index % 5 === 1 ? (
                        <Button variant="ghost" className="text-green-600">
                          Activate
                        </Button>
                      ) : (
                        <Button variant="ghost" className="text-red-600">
                          Suspend
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">245</span> results
          </div>
          <div className="flex">
            <Button variant="outline" className="mr-2">&laquo; Previous</Button>
            <Button variant="outline" className="mr-2 bg-openledger-primary text-white">1</Button>
            <Button variant="outline" className="mr-2">2</Button>
            <Button variant="outline" className="mr-2">3</Button>
            <Button variant="outline" className="mr-2">...</Button>
            <Button variant="outline" className="mr-2">24</Button>
            <Button variant="outline">Next &raquo;</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
