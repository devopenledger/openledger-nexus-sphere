
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Wallet = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="Wallet" description="Manage your tokens and transactions" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Wallet Summary */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">45,000 OLI</div>
              <div className="text-sm text-gray-500">≈ $15,750.00</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Project Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">12,500 PRJ</div>
              <div className="text-sm text-gray-500">≈ $5,625.00</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Research Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-openledger-text">8,200 RSC</div>
              <div className="text-sm text-gray-500">≈ $4,100.00</div>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex gap-2">
              <Button className="flex-1 bg-openledger-cta hover:bg-blue-600 text-white">
                Deposit
              </Button>
              <Button variant="outline" className="flex-1 border-openledger-primary text-openledger-primary hover:bg-openledger-primary hover:text-white">
                Withdraw
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Wallet Content */}
        <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
          <Tabs defaultValue="tokens">
            <div className="border-b">
              <TabsList className="flex">
                <TabsTrigger value="tokens" className="flex-1 py-3">Tokens</TabsTrigger>
                <TabsTrigger value="transactions" className="flex-1 py-3">Transactions</TabsTrigger>
                <TabsTrigger value="staking" className="flex-1 py-3">Staking</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tokens" className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Token</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { name: 'OLI', fullName: 'Openledger', balance: '45,000', value: '$15,750.00', change: '+2.3%' },
                      { name: 'PRJ', fullName: 'Project Token', balance: '12,500', value: '$5,625.00', change: '-1.2%' },
                      { name: 'RSC', fullName: 'Research', balance: '8,200', value: '$4,100.00', change: '+3.5%' },
                      { name: 'CMP', fullName: 'Company', balance: '3,000', value: '$1,800.00', change: '+0.8%' }
                    ].map((token, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-openledger-primary to-openledger-accent flex items-center justify-center text-white font-bold">
                              {token.name}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-openledger-text">{token.name}</div>
                              <div className="text-sm text-gray-500">{token.fullName}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-openledger-text">{token.balance}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-openledger-text">{token.value}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm ${token.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {token.change}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button variant="ghost" className="mr-2 text-openledger-primary">
                            Send
                          </Button>
                          <Button variant="ghost" className="text-openledger-primary">
                            Receive
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="transactions" className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Array(5).fill(null).map((_, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-openledger-text">Apr {20 - index}, 2024</div>
                          <div className="text-xs text-gray-500">14:3{index} PM</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            index % 3 === 0 
                              ? 'bg-green-100 text-green-800' 
                              : index % 3 === 1 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-blue-100 text-blue-800'
                          }`}>
                            {index % 3 === 0 ? 'Received' : index % 3 === 1 ? 'Sent' : 'Staked'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-openledger-text">
                            {['OLI', 'PRJ', 'RSC', 'CMP', 'OLI'][index]}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm ${index % 3 === 0 ? 'text-green-600' : index % 3 === 1 ? 'text-red-600' : 'text-blue-600'}`}>
                            {index % 3 === 0 ? '+' : index % 3 === 1 ? '-' : ''}
                            {(index + 1) * 125} {['OLI', 'PRJ', 'RSC', 'CMP', 'OLI'][index]}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="staking" className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { token: 'OLI', name: 'Openledger', rate: '8.5%', period: '30 Days', min: '1,000 OLI' },
                  { token: 'PRJ', name: 'Project Token', rate: '12%', period: '90 Days', min: '500 PRJ' },
                  { token: 'RSC', name: 'Research', rate: '10%', period: '60 Days', min: '750 RSC' },
                  { token: 'CMP', name: 'Company', rate: '15%', period: '180 Days', min: '250 CMP' }
                ].map((stake, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-openledger-primary to-openledger-accent flex items-center justify-center text-white font-bold">
                            {stake.token}
                          </div>
                          <div className="ml-3">
                            <CardTitle>{stake.token} Staking</CardTitle>
                            <CardDescription>{stake.name}</CardDescription>
                          </div>
                        </div>
                        <span className="text-xl font-bold text-openledger-primary">{stake.rate}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Lock Period:</span>
                        <span className="text-openledger-text font-medium">{stake.period}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-6">
                        <span className="text-gray-500">Minimum Stake:</span>
                        <span className="text-openledger-text font-medium">{stake.min}</span>
                      </div>
                      <Button className="w-full bg-openledger-cta hover:bg-blue-600 text-white">
                        Stake Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
