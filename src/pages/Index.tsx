import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Index = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-openledger-text to-openledger-accent">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Brilliant Minds for Open Innovation
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Join the Openledger Institute community and explore projects, tokens, and impactful global connections.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button className="bg-openledger-cta hover:bg-blue-600 text-white px-8 py-3 text-base font-medium shadow-lg">
                  Explore Projects
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white hover:bg-white px-8 py-3 text-base font-medium text-openledger-text">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Decentralized Research" className="rounded-lg shadow-xl max-w-md" />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-openledger-text sm:text-4xl">
              Connecting Innovation with Investment
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform brings together the brightest minds in research, entrepreneurship, and investment.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-openledger-primary flex items-center justify-center text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-openledger-text mt-4">Tokenized Projects</h3>
                <p className="mt-2 text-gray-600">
                  Transform research and innovation into tokenized assets, creating new funding and ownership models.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-openledger-primary flex items-center justify-center text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-openledger-text mt-4">Smart Networking</h3>
                <p className="mt-2 text-gray-600">
                  Connect with like-minded researchers, entrepreneurs, and investors through our smart matching system.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-openledger-primary flex items-center justify-center text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-openledger-text mt-4">Technical Library</h3>
                <p className="mt-2 text-gray-600">
                  Access a comprehensive collection of research papers, technical documents, and industry insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="py-16 bg-openledger-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-openledger-text sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover groundbreaking research and innovation happening right now.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[1, 2, 3].map(index => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-openledger-text">Project Title {index}</h3>
                    <div className="flex items-center mt-2">
                      <span className="bg-openledger-primary/20 text-openledger-primary text-xs px-2 py-1 rounded-full">
                        Tech
                      </span>
                      <span className="bg-openledger-accent/20 text-openledger-accent text-xs px-2 py-1 rounded-full ml-2">
                        Research
                      </span>
                    </div>
                    <p className="mt-4 text-gray-600">
                      A brief description of this innovative project and its potential impact on the field.
                    </p>
                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-openledger-text font-semibold">500,000 OLI</span>
                      <Button variant="outline" className="text-openledger-primary border-openledger-primary hover:bg-openledger-primary hover:text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="mt-12 text-center">
              <Link to="/projects">
                <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-openledger-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-openledger-background">Join Openledger Institute today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/auth/register">
                <Button className="bg-openledger-cta hover:bg-blue-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-openledger-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Index;