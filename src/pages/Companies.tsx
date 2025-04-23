
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companiesData } from '@/data/companiesData';

const Companies = () => {
  const [search, setSearch] = React.useState("");
  const filteredCompanies = companiesData.filter(
    (company) =>
      company.name.toLowerCase().includes(search.toLowerCase()) ||
      company.sector.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Companies"
        description="Explore innovative companies in our ecosystem. Find partners, research organizations, and fintech startups powering scientific breakthroughs."
      />
      <main className="flex-1 bg-openledger-background">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Search and Sector Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search companies..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary font-archivo"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              {/* Sectors */}
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-openledger-primary focus:border-openledger-primary font-archivo">
                <option>All Sectors</option>
                <option>Blockchain</option>
                <option>Fintech</option>
                <option>Biotech</option>
                <option>SaaS</option>
              </select>
            </div>
          </div>
          {/* Companies Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map((company) => (
              <div
                key={company.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="h-32 bg-gray-100 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20 w-20 object-cover rounded-full border-2 border-openledger-primary"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-openledger-text font-archivo">{company.name}</h3>
                    <span className="bg-openledger-accent/20 text-openledger-accent text-xs px-2 py-1 rounded-full font-archivo">
                      {company.sector}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600 line-clamp-3 font-archivo">
                    {company.description}
                  </p>
                  <div className="mt-3 text-xs text-gray-400">
                    Linked Projects:
                    <ul className="flex flex-wrap mt-1 gap-x-1">
                      {company.projects.map(proj => (
                        <li key={proj.slug}>
                          <Link
                            to={`/projects/${proj.slug}`}
                            className="text-openledger-primary hover:text-openledger-accent underline"
                          >
                            {proj.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-6">
                    <Link to={`/companies/${company.slug}`}>
                      <Button className="w-full bg-openledger-cta hover:bg-blue-600 text-white font-archivo font-semibold">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination (Placeholder) */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" className="mr-2">&laquo; Previous</Button>
              <Button variant="outline" className="mr-2 bg-openledger-primary text-white font-bold">1</Button>
              <Button variant="outline" className="mr-2">2</Button>
              <Button variant="outline" className="mr-2">3</Button>
              <Button variant="outline">Next &raquo;</Button>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
