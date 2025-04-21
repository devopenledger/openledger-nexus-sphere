
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const analyticsData = [
  { name: 'Jan', users: 400, projects: 240, transactions: 140 },
  { name: 'Feb', users: 300, projects: 260, transactions: 180 },
  { name: 'Mar', users: 200, projects: 290, transactions: 220 },
  { name: 'Apr', users: 278, projects: 320, transactions: 240 },
  { name: 'May', users: 189, projects: 350, transactions: 260 },
  { name: 'Jun', users: 239, projects: 380, transactions: 300 },
  { name: 'Jul', users: 349, projects: 410, transactions: 380 },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="Admin Dashboard" description="Platform overview and management" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">1,249</div>
              <p className="text-xs text-green-500 flex items-center">
                +8.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">415</div>
              <p className="text-xs text-green-500 flex items-center">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">86</div>
              <p className="text-xs text-green-500 flex items-center">
                +5.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Token Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">$4.28M</div>
              <p className="text-xs text-red-500 flex items-center">
                -2.3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Chart */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
              <CardDescription>User, project, and transaction growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={analyticsData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#05d2ed" strokeWidth={2} />
                    <Line type="monotone" dataKey="projects" stroke="#2b1859" strokeWidth={2} />
                    <Line type="monotone" dataKey="transactions" stroke="#321c8e" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity and System Status */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions performed by admins</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "User suspended", admin: "Admin 1", time: "10 minutes ago" },
                  { action: "Project approved", admin: "Admin 3", time: "1 hour ago" },
                  { action: "Token issuance", admin: "Admin 2", time: "3 hours ago" },
                  { action: "System update", admin: "Admin 1", time: "1 day ago" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-openledger-primary/20 flex items-center justify-center text-openledger-primary">
                        {i + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-openledger-text">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">
                        By {activity.admin} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current platform performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              {[
                { name: "Server Uptime", value: "99.98%", status: "healthy" },
                { name: "API Response Time", value: "120ms", status: "healthy" },
                { name: "Database Load", value: "42%", status: "healthy" },
                { name: "Storage Usage", value: "68%", status: "warning" },
              ].map((metric, i) => (
                <div key={i} className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-openledger-text">{metric.name}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-700 mr-2">{metric.value}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      metric.status === 'healthy' 
                        ? 'bg-green-500' 
                        : metric.status === 'warning' 
                          ? 'bg-yellow-500' 
                          : 'bg-red-500'
                    }`}></div>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Token Distribution</h4>
                <ResponsiveContainer width="100%" height={150}>
                  <BarChart data={[
                    { name: 'Users', value: 35 },
                    { name: 'Projects', value: 25 },
                    { name: 'Companies', value: 15 },
                    { name: 'Reserve', value: 25 },
                  ]}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#05d2ed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
