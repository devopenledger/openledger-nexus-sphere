
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const AdminLogs = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="System Logs" description="Monitor platform activity and system events" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search logs..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Levels</option>
              <option>Info</option>
              <option>Warning</option>
              <option>Error</option>
              <option>Critical</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Services</option>
              <option>Auth</option>
              <option>API</option>
              <option>Database</option>
              <option>Blockchain</option>
              <option>Frontend</option>
            </select>
            <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
              Export Logs
            </Button>
          </div>
        </div>
        
        {/* Logs Table */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array(20).fill(null).map((_, index) => {
                  const levels = [
                    { name: 'Info', class: 'bg-blue-100 text-blue-800' },
                    { name: 'Warning', class: 'bg-yellow-100 text-yellow-800' },
                    { name: 'Error', class: 'bg-red-100 text-red-800' },
                    { name: 'Critical', class: 'bg-red-100 text-red-800' }
                  ];
                  
                  const services = [
                    'Auth', 'API', 'Database', 'Blockchain', 'Frontend'
                  ];
                  
                  const messages = [
                    'User login successful',
                    'Failed login attempt',
                    'Database query completed',
                    'Token transfer processed',
                    'Project created',
                    'User registration',
                    'Rate limit exceeded',
                    'API request failed',
                    'Token issuance completed',
                    'File upload failed'
                  ];
                  
                  const level = levels[Math.floor(Math.random() * levels.length)];
                  const service = services[Math.floor(Math.random() * services.length)];
                  const message = messages[Math.floor(Math.random() * messages.length)];
                  
                  const hour = Math.floor(Math.random() * 24);
                  const minute = Math.floor(Math.random() * 60);
                  const second = Math.floor(Math.random() * 60);
                  const timestamp = `2024-04-${20 - index % 20} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
                  
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-mono text-gray-900">
                          {timestamp}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${level.class}`}>
                          {level.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-openledger-text">
                          {service}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {level.name === 'Info' || Math.random() > 0.5 ? (
                            <>
                              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200"></div>
                              <div className="ml-3 text-sm text-openledger-text">
                                User {index + 1}
                              </div>
                            </>
                          ) : (
                            <span className="text-sm text-gray-500">System</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {message} {index % 10 === 0 ? '- with additional context information' : ''}
                        </div>
                        {level.name === 'Error' || level.name === 'Critical' ? (
                          <div className="text-xs text-red-600 font-mono mt-1">
                            Error code: {Math.floor(Math.random() * 1000)}
                          </div>
                        ) : null}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" className="text-openledger-primary">
                          Details
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">20</span> of <span className="font-medium">12,453</span> log entries
          </div>
          <div className="flex">
            <Button variant="outline" className="mr-2">&laquo; Previous</Button>
            <Button variant="outline" className="mr-2 bg-openledger-primary text-white">1</Button>
            <Button variant="outline" className="mr-2">2</Button>
            <Button variant="outline" className="mr-2">3</Button>
            <Button variant="outline" className="mr-2">...</Button>
            <Button variant="outline" className="mr-2">623</Button>
            <Button variant="outline">Next &raquo;</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogs;
