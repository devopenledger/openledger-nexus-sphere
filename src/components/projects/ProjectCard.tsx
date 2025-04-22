
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

export interface Project {
  id: number;
  title: string;
  tagline: string;
  creator: string;
  tags: string[];
  image: string;
  progress: number;
  funded: number;
  goal: number;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`} className="block h-full">
      <Card className="h-full bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-openledger-text">{project.title}</h3>
            {project.tags[0] && (
              <Badge className="bg-openledger-primary/20 text-openledger-primary">
                {project.tags[0]}
              </Badge>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-500">{project.tagline}</p>
          
          <div className="flex items-center mt-4">
            <Avatar className="h-8 w-8 bg-gray-300">
              <span className="text-xs">@{project.creator.charAt(0).toUpperCase()}</span>
            </Avatar>
            <span className="ml-2 text-sm text-gray-500">@{project.creator}</span>
          </div>
          
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-openledger-primary h-2 rounded-full" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="font-bold text-openledger-text">{project.progress}% Funded</span>
              <span className="text-gray-500">{project.funded.toLocaleString()} / {project.goal.toLocaleString()} OLI</span>
            </div>
          </div>
          
          <div className="mt-6">
            <Button className="w-full bg-openledger-cta hover:bg-blue-600 text-white">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
