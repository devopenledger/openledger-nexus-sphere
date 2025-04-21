
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 42 },
  { name: 'Apr', value: 50 },
  { name: 'May', value: 53 },
  { name: 'Jun', value: 60 },
  { name: 'Jul', value: 58 },
];

const AdminTokens = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="Token Management" description="Manage and issue platform tokens" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Token Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total OLI Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">10,000,000</div>
              <div className="text-sm text-gray-500">Market Cap: $4.28M</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Circulating Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">6,523,450</div>
              <div className="text-sm text-gray-500">65.2% of total supply</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Unique Token Holders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">1,287</div>
              <div className="text-sm text-green-500">+12.3% this month</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Current Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">$0.428</div>
              <div className="text-sm text-green-500">+2.1% in 24h</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Price Chart */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>OLI Token Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#05d2ed" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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
              <option>All Types</option>
              <option>Platform</option>
              <option>Project</option>
              <option>Company</option>
              <option>Research</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
            <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
              Issue Token
            </Button>
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
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Supply
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
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
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-openledger-primary to-openledger-accent flex items-center justify-center text-white font-medium">
                          {['OLI', 'PRJ', 'RSC', 'CMP', 'DAT', 'NET', 'AI', 'BIO', 'FIN', 'SEC'][index]}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-openledger-text">
                            {['Openledger', 'Project', 'Research', 'Company', 'Data', 'Network', 'AI', 'Biotech', 'Finance', 'Security'][index]} Token
                          </div>
                          <div className="text-sm text-gray-500">
                            {['OLI', 'PRJ', 'RSC', 'CMP', 'DAT', 'NET', 'AI', 'BIO', 'FIN', 'SEC'][index]}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index === 0 
                          ? 'bg-purple-100 text-purple-800' 
                          : index % 3 === 0 
                            ? 'bg-blue-100 text-blue-800' 
                            : index % 3 === 1
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {index === 0 ? 'Platform' : index % 3 === 0 ? 'Project' : index % 3 === 1 ? 'Company' : 'Research'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index === 0 || index % 4 !== 0 
                          ? 'bg-green-100 text-green-800' 
                          : index % 2 === 0 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {index === 0 || index % 4 !== 0 ? 'Active' : index % 2 === 0 ? 'Pending' : 'Suspended'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-openledger-text">
                        {index === 0 ? '10,000,000' : (index + 1) * 500000}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-openledger-text">
                        ${index === 0 ? '0.428' : ((index + 1) * 0.15).toFixed(3)}
                      </div>
                      <div className="text-xs text-gray-500">
                        Market Cap: ${index === 0 ? '4.28M' : ((index + 1) * 0.15 * (index + 1) * 500000 / 1000000).toFixed(2)}M
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" className="text-openledger-primary">
                        View
                      </Button>
                      {index % 4 === 0 && index !== 0 && (
                        <Button variant="ghost" className="text-green-600">
                          Approve
                        </Button>
                      )}
                      {index % 4 === 3 && (
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
      </div>
    </div>
  );
};

export default AdminTokens;
