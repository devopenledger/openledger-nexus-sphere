
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title="About Openledger Institute" description="Learn about our mission, vision, and team" />
      
      <main className="flex-1">
        {/* Vision and Mission */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-extrabold text-openledger-text">Our Vision</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Openledger Institute envisions a world where research and innovation are decentralized, transparent, and accessible to all. We believe in breaking down traditional barriers to research funding and collaboration, creating a more equitable ecosystem for knowledge creation and sharing.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-openledger-text">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Our mission is to build the world's most comprehensive platform connecting researchers, entrepreneurs, and investors through tokenized projects, smart networking, and technical resources. We aim to accelerate innovation by creating new funding models and collaborative opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="bg-openledger-background py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-openledger-text text-center">Our History</h2>
            <div className="mt-12 relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-between">
                <div className="bg-openledger-background px-4">
                  <div className="w-12 h-12 rounded-full bg-openledger-primary flex items-center justify-center text-white">
                    <span className="font-bold">2018</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-openledger-text">Founded</h3>
                  <p className="mt-2 text-gray-500">Openledger Institute was established</p>
                </div>
                <div className="bg-openledger-background px-4">
                  <div className="w-12 h-12 rounded-full bg-openledger-primary flex items-center justify-center text-white">
                    <span className="font-bold">2020</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-openledger-text">Platform Launch</h3>
                  <p className="mt-2 text-gray-500">First version of the platform launched</p>
                </div>
                <div className="bg-openledger-background px-4">
                  <div className="w-12 h-12 rounded-full bg-openledger-primary flex items-center justify-center text-white">
                    <span className="font-bold">2022</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-openledger-text">Global Expansion</h3>
                  <p className="mt-2 text-gray-500">Expanded to 20+ countries</p>
                </div>
                <div className="bg-openledger-background px-4">
                  <div className="w-12 h-12 rounded-full bg-openledger-primary flex items-center justify-center text-white">
                    <span className="font-bold">2024</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-openledger-text">Token Launch</h3>
                  <p className="mt-2 text-gray-500">Launched OLI governance token</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-openledger-text text-center">Our Team</h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 text-center mx-auto">
              Meet the talented individuals behind Openledger Institute.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Sarah Chen",
                  role: "Founder & CEO",
                  bio: "PhD in Computer Science with expertise in distributed systems and blockchain technology."
                },
                {
                  name: "Michael Rodriguez",
                  role: "CTO",
                  bio: "Former lead developer at Ethereum Foundation with extensive experience in smart contract development."
                },
                {
                  name: "Aisha Karimi",
                  role: "Research Director",
                  bio: "Economics researcher specializing in tokenomics and decentralized finance models."
                },
                {
                  name: "David Park",
                  role: "Head of Partnerships",
                  bio: "10+ years experience building strategic partnerships in technology and finance sectors."
                },
                {
                  name: "Emma Johnson",
                  role: "Community Lead",
                  bio: "Community building specialist with background in open-source project management."
                },
                {
                  name: "Robert Zhang",
                  role: "Chief Financial Officer",
                  bio: "Former investment banker with expertise in venture capital and cryptocurrency markets."
                }
              ].map((person, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                  <h3 className="text-lg font-bold text-openledger-text">{person.name}</h3>
                  <p className="text-openledger-primary font-semibold">{person.role}</p>
                  <p className="mt-2 text-gray-500">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="bg-openledger-background py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-openledger-text text-center">Our Partners</h2>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="col-span-1 flex justify-center items-center">
                  <div className="w-full h-16 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Partner {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
