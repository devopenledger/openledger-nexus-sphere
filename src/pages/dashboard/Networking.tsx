
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';

const Networking = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="Networking" description="Connect with researchers, entrepreneurs, and investors" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for people, projects, or companies..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Tabs defaultValue="connections">
            <div className="border-b">
              <TabsList className="flex">
                <TabsTrigger value="connections" className="flex-1 py-3">My Connections</TabsTrigger>
                <TabsTrigger value="requests" className="flex-1 py-3">Connection Requests</TabsTrigger>
                <TabsTrigger value="suggestions" className="flex-1 py-3">Suggestions</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="connections" className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Array(6).fill(null).map((_, index) => (
                  <Card key={index} className="p-4 flex items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-bold text-openledger-text">Connection {index + 1}</h3>
                      <p className="text-sm text-gray-500">{['Researcher', 'Entrepreneur', 'Investor'][index % 3]}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Connected since {['Jan', 'Feb', 'Mar', 'Apr'][index % 4]} 2024
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                        Message
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="requests" className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Array(3).fill(null).map((_, index) => (
                  <Card key={index} className="p-4 flex items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-bold text-openledger-text">Request {index + 1}</h3>
                      <p className="text-sm text-gray-500">{['Researcher', 'Entrepreneur', 'Investor'][index % 3]}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Requested to connect {index + 1} day{index > 0 ? 's' : ''} ago
                      </p>
                    </div>
                    <div className="ml-4 flex flex-col space-y-2">
                      <Button className="bg-openledger-cta hover:bg-blue-600 text-white text-sm">
                        Accept
                      </Button>
                      <Button variant="outline" className="text-gray-500 border-gray-300 text-sm">
                        Decline
                      </Button>
                    </div>
                  </Card>
                ))}
                {Array(3).length === 0 && (
                  <div className="col-span-2 text-center py-12 text-gray-500">
                    No pending connection requests
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="suggestions" className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {Array(9).fill(null).map((_, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mb-3"></div>
                      <h3 className="font-bold text-openledger-text">Suggested Contact {index + 1}</h3>
                      <p className="text-sm text-gray-500">{['Researcher', 'Entrepreneur', 'Investor'][index % 3]}</p>
                      <p className="text-sm text-gray-600 mt-2 mb-4">
                        {index % 3 === 0 
                          ? 'Specializes in blockchain technology'
                          : index % 3 === 1 
                            ? 'Founded 3 startups'
                            : 'Invested in 15+ projects'}
                      </p>
                      <div className="mt-2 text-sm text-gray-500 mb-4">
                        <span>{index + 2} mutual connections</span>
                      </div>
                      <Button className="w-full bg-openledger-primary hover:bg-cyan-600 text-white">
                        Connect
                      </Button>
                    </div>
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

export default Networking;
