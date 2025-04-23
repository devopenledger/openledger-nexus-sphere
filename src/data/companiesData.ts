
/**
 * Openledger Company Mock Data
 * Used for /companies and /companies/:slug
 */
export interface Company {
  slug: string;
  name: string;
  logo: string;
  sector: string;
  description: string;
  projects: { name: string; slug: string }[];
  team: { name: string; role: string }[];
  website?: string;
  linkedIn?: string;
  cta?: string;
  location?: string;
}

export const companiesData: Company[] = [
  {
    slug: "block-research-labs",
    name: "Block Research Labs",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=256&h=256",
    sector: "Blockchain",
    description:
      "A research-driven blockchain company specializing in decentralized identity, smart contracts, and open-source governance solutions.",
    projects: [
      { name: "Open Identity Protocol", slug: "open-identity-protocol" },
      { name: "LedgerVote", slug: "ledgervote" },
    ],
    team: [
      { name: "Dr. Alicia Sun", role: "CEO & Founder" },
      { name: "James Lee", role: "Lead Developer" },
      { name: "Priya Ramesh", role: "Research Lead" }
    ],
    website: "https://blockresearchlabs.com",
    linkedIn: "https://linkedin.com/company/blockresearchlabs",
    cta: "Connect",
    location: "Dubai, UAE",
  },
  {
    slug: "genome-tech",
    name: "GenomeTech",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=facearea&w=256&h=256",
    sector: "Biotech",
    description:
      "Biotech startup leveraging distributed ledgers for genetic research collaboration and data integrity.",
    projects: [
      { name: "Genedata Ledger", slug: "genedata-ledger" },
    ],
    team: [
      { name: "Emma Shah", role: "Co-Founder" },
      { name: "Li Wei", role: "Genomics Lead" }
    ],
    website: "https://genometech.io",
    linkedIn: "https://linkedin.com/company/genometech",
    cta: "Learn More",
    location: "London, UK",
  },
  {
    slug: "equity-finance",
    name: "EquityFinance",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=facearea&w=256&h=256",
    sector: "Fintech",
    description:
      "Next-generation Fintech platform providing micro-equity for research commercialization and startups.",
    projects: [
      { name: "MicroEquity DEX", slug: "microequity-dex" },
    ],
    team: [
      { name: "Robert Zhang", role: "CFO" },
      { name: "Lucia Garcia", role: "Investment Director" }
    ],
    website: "https://equityfinance.app",
    linkedIn: "https://linkedin.com/company/equityfinance",
    cta: "Apply Now",
    location: "New York, USA",
  }
];
