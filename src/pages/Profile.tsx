
import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-openledger-background">
        {/* Profile Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-openledger-primary to-openledger-accent flex items-center justify-center text-white text-xl font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-openledger-text">John Doe</h1>
                  <p className="text-gray-500">Researcher & Entrepreneur</p>
                </div>
              </div>
              <div className="mt-4 flex md:mt-0">
                <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
                  Connect
                </Button>
                <Button variant="outline" className="ml-3 border-openledger-primary text-openledger-primary">
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold text-openledger-text mb-4">About</h2>
                <p className="text-gray-600 mb-4">
                  Researcher and entrepreneur focusing on blockchain applications for scientific research. PhD in Computer Science from MIT.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-24">Location:</span>
                    <span className="text-openledger-text">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-24">Joined:</span>
                    <span className="text-openledger-text">March 2022</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-24">Website:</span>
                    <a href="#" className="text-openledger-primary hover:text-openledger-accent">johndoe.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-bold text-openledger-text mb-4">Connections</h2>
                <div className="flex flex-wrap gap-2">
                  {Array(8).fill(null).map((_, index) => (
                    <div key={index} className="w-10 h-10 rounded-full bg-gray-300"></div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                    +24
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <Tabs defaultValue="projects" className="w-full">
                  <div className="border-b">
                    <TabsList className="flex">
                      <TabsTrigger value="projects" className="flex-1 py-3">Projects</TabsTrigger>
                      <TabsTrigger value="papers" className="flex-1 py-3">Papers</TabsTrigger>
                      <TabsTrigger value="companies" className="flex-1 py-3">Companies</TabsTrigger>
                      <TabsTrigger value="tokens" className="flex-1 py-3">Tokens</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="projects" className="p-6">
                    <div className="space-y-6">
                      {Array(3).fill(null).map((_, index) => (
                        <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                          <h3 className="text-lg font-bold text-openledger-text">Project Title {index + 1}</h3>
                          <p className="mt-2 text-gray-600">
                            A brief description of this project, highlighting key achievements and innovations.
                          </p>
                          <div className="mt-2 flex space-x-2">
                            <span className="bg-openledger-primary/20 text-openledger-primary text-xs px-2 py-1 rounded-full">
                              Blockchain
                            </span>
                            <span className="bg-openledger-accent/20 text-openledger-accent text-xs px-2 py-1 rounded-full">
                              Research
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="papers" className="p-6">
                    <div className="space-y-6">
                      {Array(3).fill(null).map((_, index) => (
                        <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                          <h3 className="text-lg font-bold text-openledger-text">Paper Title {index + 1}</h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Published in: Journal of Blockchain Research, 2023
                          </p>
                          <p className="text-gray-600">
                            Abstract: This paper presents novel findings in the field of decentralized research platforms.
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="companies" className="p-6">
                    <div className="space-y-6">
                      {Array(2).fill(null).map((_, index) => (
                        <div key={index} className="border-b pb-6 last:border-0 last:pb-0 flex items-center">
                          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                            Co
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-bold text-openledger-text">Company {index + 1}</h3>
                            <p className="text-gray-600">
                              CEO & Founder
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="tokens" className="p-6">
                    <div className="space-y-6">
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Token</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Type</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Value</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array(3).fill(null).map((_, index) => (
                              <tr key={index} className="border-b">
                                <td className="py-3 px-4 text-openledger-text">JDT-{index + 1}</td>
                                <td className="py-3 px-4 text-gray-600">{['Research', 'Project', 'Company'][index]}</td>
                                <td className="py-3 px-4 text-openledger-text">${(index + 1) * 2.35}</td>
                                <td className="py-3 px-4">
                                  <Button variant="outline" className="text-sm text-openledger-primary border-openledger-primary">View</Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
