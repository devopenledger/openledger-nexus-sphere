
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { companiesData } from "@/data/companiesData";

const CompanyProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const company = companiesData.find((c) => c.slug === slug);

  if (!company) {
    return (
      <div className="min-h-screen bg-openledger-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-openledger-text font-archivo">Company Not Found</h2>
            <Link to="/companies" className="mt-4 inline-block text-openledger-primary hover:text-openledger-accent underline">Back to Companies</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-openledger-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-8 mb-8 p-8">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <img
              src={company.logo}
              alt={company.name}
              className="h-28 w-28 rounded-full border-4 border-openledger-primary object-cover shadow"
            />
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-openledger-text font-archivo">{company.name}</h1>
              <span className="inline-block bg-openledger-accent/20 text-openledger-accent text-sm px-3 py-1 rounded-full mt-2">
                {company.sector}
              </span>
              <div className="text-gray-500 mt-2 font-archivo">
                {company.location}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button className="bg-openledger-cta hover:bg-blue-600 text-white font-archivo font-semibold w-36">
                {company.cta || "Connect"}
              </Button>
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-openledger-primary underline hover:text-openledger-accent text-sm"
                >
                  Website
                </a>
              )}
              {company.linkedIn && (
                <a
                  href={company.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-openledger-primary underline hover:text-openledger-accent text-sm"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
          {/* Description */}
          <div className="mt-8 border-t pt-8 font-archivo">
            <h2 className="text-lg font-bold text-openledger-accent mb-2 font-archivo">About {company.name}</h2>
            <p className="text-gray-700">{company.description}</p>
          </div>
          {/* Linked Projects */}
          <div className="mt-8">
            <h3 className="font-semibold text-openledger-text text-md mb-4 font-archivo">Linked Projects</h3>
            <ul className="flex flex-col gap-2">
              {company.projects.map((proj) => (
                <li key={proj.slug}>
                  <Link to={`/projects/${proj.slug}`} className="text-openledger-primary hover:text-openledger-accent underline font-archivo font-semibold">
                    {proj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Team */}
          <div className="mt-8">
            <h3 className="font-semibold text-openledger-text text-md mb-4 font-archivo">Team</h3>
            <ul className="flex flex-col gap-1">
              {company.team.map((tm, idx) => (
                <li key={idx}>
                  <span className="font-bold text-openledger-text">{tm.name}</span>
                  <span className="text-gray-500 ml-2">{tm.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyProfile;
