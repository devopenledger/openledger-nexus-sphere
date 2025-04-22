
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

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Blockchain For Science",
    tagline: "Decentralized research validation and recognition system",
    creator: "alex_scientist",
    tags: ["Blockchain", "Academic"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    progress: 65,
    funded: 325000,
    goal: 500000
  },
  {
    id: 2,
    title: "AI Research Companion",
    tagline: "Machine learning tools to accelerate scientific discovery",
    creator: "maria_ai",
    tags: ["AI & ML", "Tools"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    progress: 40,
    funded: 200000,
    goal: 500000
  },
  {
    id: 3,
    title: "Open Access Publishing Platform",
    tagline: "Making research accessible to everyone, everywhere",
    creator: "open_knowledge",
    tags: ["Publishing", "Open Source"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    progress: 80,
    funded: 400000,
    goal: 500000
  },
  {
    id: 4,
    title: "Sustainable Energy Research",
    tagline: "Developing new technologies for renewable energy storage",
    creator: "green_future",
    tags: ["Sustainability", "Energy"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    progress: 30,
    funded: 150000,
    goal: 500000
  },
  {
    id: 5,
    title: "Biodiversity Mapping Initiative",
    tagline: "Using blockchain to track and preserve global biodiversity",
    creator: "eco_warrior",
    tags: ["Blockchain", "Sustainability"],
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    progress: 50,
    funded: 250000,
    goal: 500000
  },
  {
    id: 6,
    title: "Quantum Computing Research",
    tagline: "Advancing quantum algorithms for complex problem solving",
    creator: "quantum_leap",
    tags: ["Quantum", "Computing"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    progress: 20,
    funded: 100000,
    goal: 500000
  },
  {
    id: 7,
    title: "Neuroplasticity Studies",
    tagline: "Understanding how the brain adapts and rewires itself",
    creator: "brain_scientist",
    tags: ["Neuroscience", "Medical"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    progress: 75,
    funded: 375000,
    goal: 500000
  },
  {
    id: 8,
    title: "Ocean Plastic Cleanup System",
    tagline: "Innovative solutions to remove plastic from our oceans",
    creator: "ocean_guardian",
    tags: ["Sustainability", "Engineering"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    progress: 60,
    funded: 300000,
    goal: 500000
  },
  {
    id: 9,
    title: "Gene Therapy Research",
    tagline: "Next-generation treatments for genetic disorders",
    creator: "dna_expert",
    tags: ["Biotech", "Medical"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    progress: 45,
    funded: 225000,
    goal: 500000
  }
];
