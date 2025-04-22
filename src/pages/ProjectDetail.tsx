
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { projectsData } from '@/data/projectsData';
import { Card, CardContent } from '@/components/ui/card';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-openledger-background">
          <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-openledger-text">Project not found</h2>
            <p className="mt-4 text-gray-600">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <div className="mt-8">
              <Link to="/projects">
                <Button>Back to Projects</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title={project.title} description={project.tagline} />

      <main className="flex-1 bg-openledger-background">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/projects" className="text-openledger-primary hover:underline flex items-center">
              ← Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 sm:h-80 bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} className="bg-openledger-primary/20 text-openledger-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-openledger-text mb-4">About this Project</h2>
                  <p className="text-gray-700 mb-6">
                    This project aims to revolutionize the field by implementing innovative solutions to 
                    long-standing challenges. The {project.title} initiative represents a significant 
                    advancement in {project.tags[0]} technology, with applications spanning multiple 
                    domains of scientific research.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our interdisciplinary team brings together experts from diverse backgrounds to tackle 
                    complex problems with novel approaches. The proposed methodology leverages cutting-edge 
                    techniques and open-source collaboration to ensure maximum impact and accessibility.
                  </p>
                  
                  <h3 className="text-xl font-bold text-openledger-text mb-3">Research Goals</h3>
                  <ul className="list-disc pl-5 text-gray-700 mb-6">
                    <li className="mb-2">Develop new frameworks for cross-disciplinary collaboration</li>
                    <li className="mb-2">Create open-source tools accessible to researchers worldwide</li>
                    <li className="mb-2">Implement decentralized validation mechanisms</li>
                    <li className="mb-2">Establish community-driven governance models</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-openledger-text mb-3">Expected Outcomes</h3>
                  <p className="text-gray-700">
                    Upon completion, this project will deliver a comprehensive solution that addresses 
                    the identified challenges while creating new opportunities for innovation in the field.
                    All research outputs will be published under open licenses to maximize their impact 
                    and ensure widespread adoption.
                  </p>
                </div>
              </div>
            </div>

            {/* Funding & Researcher Info Sidebar */}
            <div className="lg:col-span-1">
              {/* Funding Card */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-openledger-text mb-4">Funding Progress</h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-bold text-openledger-text">{project.progress}% Funded</span>
                      <span className="text-gray-500">{project.funded.toLocaleString()} OLI raised</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-openledger-primary h-2.5 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm mb-6">
                    <span className="text-gray-500">Goal: {project.goal.toLocaleString()} OLI</span>
                    <span className="text-gray-500">30 days left</span>
                  </div>

                  <Button className="w-full mb-3 bg-openledger-cta hover:bg-blue-600 text-white">
                    Support this Project
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Share Project
                  </Button>
                </CardContent>
              </Card>

              {/* Researcher Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-openledger-text mb-4">Project Lead</h3>
                  
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4 bg-gray-300">
                      <span className="text-base">@{project.creator.charAt(0).toUpperCase()}</span>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-openledger-text">
                        @{project.creator}
                      </h4>
                      <p className="text-sm text-gray-500">Research Scientist</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4">
                    Experienced researcher with expertise in {project.tags.join(' and ')}.
                    Leading multidisciplinary teams to solve complex problems.
                  </p>
                  
                  <Button variant="outline" className="w-full text-openledger-primary border-openledger-primary">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
