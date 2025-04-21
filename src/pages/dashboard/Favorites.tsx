
import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';

const Favorites = () => {
  return (
    <div className="min-h-screen bg-openledger-background">
      <PageHeader title="My Favorites" description="Projects, companies, and resources you've saved" />
      
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Tabs defaultValue="projects">
            <div className="border-b">
              <TabsList className="flex">
                <TabsTrigger value="projects" className="flex-1 py-3">Projects</TabsTrigger>
                <TabsTrigger value="companies" className="flex-1 py-3">Companies</TabsTrigger>
                <TabsTrigger value="papers" className="flex-1 py-3">Papers</TabsTrigger>
                <TabsTrigger value="tokens" className="flex-1 py-3">Tokens</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="projects" className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array(6).fill(null).map((_, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200"></div>
                    <div className="p-4">
                      <h3 className="font-bold text-openledger-text">Project Name {index + 1}</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        Short description of this project and what makes it interesting.
                      </p>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="companies" className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array(4).fill(null).map((_, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="h-20 bg-gray-200 flex items-center justify-center mb-4">
                      <span className="text-gray-500">Company Logo</span>
                    </div>
                    <h3 className="font-bold text-openledger-text">Company Name {index + 1}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Brief description of the company and its focus areas.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                        View Company
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="papers" className="p-6">
              <div className="space-y-6">
                {Array(5).fill(null).map((_, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold text-openledger-text">Research Paper Title {index + 1}</h3>
                    <p className="text-sm text-gray-500 mt-1">Authors: Researcher A, Researcher B</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Abstract excerpt from the paper that gives an overview of the research and findings.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                        Read Paper
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tokens" className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Token</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Array(5).fill(null).map((_, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-openledger-primary to-openledger-accent flex items-center justify-center text-white font-bold">
                              T{index + 1}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-openledger-text">Token {index + 1}</div>
                              <div className="text-sm text-gray-500">TKN-{index + 1}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-openledger-text">${(index + 1) * 2.35}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm ${index % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {index % 2 === 0 ? '+' : '-'}{index + 1}.{(index * 7) % 10}%
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button variant="outline" className="text-openledger-primary border-openledger-primary">
                            View
                          </Button>
                          <Button variant="ghost" className="ml-2 text-red-500">
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
