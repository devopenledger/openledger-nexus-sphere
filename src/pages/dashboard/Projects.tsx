
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardProjects = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="My Projects" description="Manage your research and innovation projects" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-6">
          <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
            Create New Project
          </Button>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Tabs defaultValue="active">
            <div className="border-b">
              <TabsList className="flex">
                <TabsTrigger value="active" className="flex-1 py-3">Active Projects</TabsTrigger>
                <TabsTrigger value="pending" className="flex-1 py-3">Pending</TabsTrigger>
                <TabsTrigger value="completed" className="flex-1 py-3">Completed</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="active" className="p-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {Array(3).fill(null).map((_, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-openledger-text">Project Alpha {index + 1}</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      This project focuses on developing new blockchain protocols for scientific research data management.
                    </p>
                    <div className="mb-4">
                      <div className="text-xs font-medium text-gray-500 mb-1">Funding Progress</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-openledger-primary h-2 rounded-full" style={{ width: `${(index + 6) * 10}%` }}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>{(index + 6) * 10}%</span>
                        <span>{(index + 6) * 10000} / 100,000 OLI</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 justify-end">
                      <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                        Edit
                      </Button>
                      <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
                        Manage
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pending" className="p-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {Array(2).fill(null).map((_, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-openledger-text">Project Beta {index + 1}</h3>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Pending
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      A new blockchain-based platform for tracking research citations and contributions.
                    </p>
                    <div className="mb-4">
                      <div className="text-xs font-medium text-gray-500 mb-1">Status</div>
                      <div className="text-sm text-gray-600">Awaiting approval from administrators</div>
                    </div>
                    <div className="flex space-x-2 justify-end">
                      <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                        Edit
                      </Button>
                      <Button variant="ghost" className="text-gray-500">
                        Cancel
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="p-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {Array(2).fill(null).map((_, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-openledger-text">Project Gamma {index + 1}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Completed
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Development of a token economics model for sustainable research funding.
                    </p>
                    <div className="mb-4">
                      <div className="text-xs font-medium text-gray-500 mb-1">Results</div>
                      <div className="text-sm text-gray-600">Successfully completed on March 15, 2024</div>
                    </div>
                    <div className="flex space-x-2 justify-end">
                      <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                        View Report
                      </Button>
                      <Button variant="outline" className="text-openledger-accent border-openledger-accent">
                        Archive
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

export default DashboardProjects;
