
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1200 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="Dashboard" description="Welcome back to your Openledger Institute dashboard" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">45,000 OLI</div>
              <p className="text-xs text-green-500 flex items-center">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">3</div>
              <p className="text-xs text-gray-500">Active projects</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">1</div>
              <p className="text-xs text-gray-500">Registered company</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">28</div>
              <p className="text-xs text-gray-500">Active connections</p>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Chart */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Value</CardTitle>
              <CardDescription>Your token portfolio over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
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
        </div>

        {/* Recent Activity and Notifications */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-openledger-primary/20 flex items-center justify-center text-openledger-primary">
                        {i}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-openledger-text">
                        Project ABC received new funding
                      </p>
                      <p className="text-xs text-gray-500">
                        3 hours ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-openledger-accent/20 flex items-center justify-center text-openledger-accent">
                        {i}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-openledger-text">
                        New connection request from Jane Doe
                      </p>
                      <p className="text-xs text-gray-500">
                        1 day ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
