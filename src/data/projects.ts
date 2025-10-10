export interface Project {
  name: string;
  dates: string;
  skills: string[];
  description: string;
  image: string;
  featured: boolean;
  actions: {
    github?: {
      url: string;
      label?: string; // Optional custom label, defaults to "GitHub"
    };
    website?: {
      url: string;
      label?: string; // Optional custom label, defaults to "Visit"
    };
    document?: {
      url: string;
      label?: string; // Optional custom label, defaults to "Download"
    };
  };
}

export const projects: Project[] = [
  {
    name: "Client: Cat Care Website",
    dates: "June 2025 - Present",
    skills: ["React", "TailwindCSS", "TypeScript", "Nextjs"],
    description:
      "Built a modern, responsive website for a local cat care business. Features clean design, contact forms, and service showcases.",
    actions: {
      github: { url: "https://github.com/samuelforrest/zoeys-cat-care" },
      website: { url: "https://zoeyshappycats.co.uk" },
    },
    image: "/zoecc.webp",
    featured: true,
  },
  {
    name: "Client: BioNewsWeekly",
    dates: "April 2025 - Present",
    skills: ["React", "TailwindCSS", "TypeScript", "Nextjs"],
    description:
      "Developed a news aggregation website for biological sciences. Features automated content curation and clean, accessible design.",
    actions: {
      github: { url: "https://github.com/samuelforrest/bionewsweekly" },
      website: { url: "https://bionewsweekly.com" },
    },
    image: "/bionewsweekly.webp",
    featured: true,
  },
  {
    name: "Tradelingo: Trading App",
    dates: "September 2024 - Present",
    skills: ["React Native", "Figma", "Documentation", "Nativewind", "Polygon.io (Financial APIs)"],
    description:
      "Tradelingo is an educational trading app for Gen Z. It is currently in a private Alpha. It is being developed for my Computer Science NEA.",
    actions: {
      website: { url: "https://tradelingo.samuelforrest.me" },
      document: { url: "https://tradelingo.samuelforrest.me", label: "Documentation" },
    },
    image: "/tradelingo.webp",
    featured: true,
  },
  {
    name: "Hackathon Winner: Verda",
    dates: "May 2025",
    skills: ["Nextjs", "TypeScript", "TailwindCSS", "Gemini API", "Presentation Skills"],
    description:
      "My teammate and I won a £300 environmental prize at KTHack25, a 30-hour hackathon.",
    actions: {
      github: { url: "https://github.com/samuelforrest/verdapp.xyz" },
      website: { url: "https://devpost.com/software/verda-edo7uq", label: "Devpost" },
    },
    image: "/verda.webp",
    featured: true,
  },
  {
    name: "EPQ: Supersonic Aviation",
    dates: "September 2024 - June 2025",
    skills: ["Researching", "Presentation Skills", "Microsoft Word"],
    description:
      "I completed an EPQ with the question, 'To what extent is it feasible to reintroduce commmerical supersonic aviation by the year 2040?' My EPQ has been awarded a mark of 51/54 (A*) provisional.",
    actions: {
      document: { url: "/assets/epq_abstract.pdf", label: "Abstract" },
      website: { url: "https://boom.aero", label: "Boom Technology" },
    },
    image: "/boom.webp",
    featured: false,
  },
  {
    name: "Sitro.io",
    dates: "Summer 2025 - Present",
    skills: ["Nextjs", "Openai API", "Inngest", "Prisma", "Sandboxes", "Clerk"],
    description:
      "An AI Landing Page generator, to be released.",
    actions: {
      website: { url: "https://sitro.io" },
    },
    image: "/sitro.webp",
    featured: true,
  },
  {
    name: "Personal Website: v5",
    dates: "September 2025",
    skills: ["React", "TailwindCSS", "Framer Motion", "Nextjs"],
    description:
      "Fifth edition of my personal website. It's a modern portfolio website built with Next.js, featuring animated UI components, and a clean, professional design.",
    actions: {
      github: { url: "https://github.com/samuelforrest/samuelforrest.me" },
      website: { url: "https://samuelforrest.me" },
    },
    image: "/sf.webp",
    featured: false,
  },
  {
    name: "BA Fleet Optimisation Work Experience",
    dates: "September 2025",
    skills: ["Research Skills", "Presentation Skills"],
    description:
      "Researched options for a new aircraft type for airline shorthaul fleets based in the UK, including presenting to a member of the British Airways fleet team, developing my analytical and presentation skills.",
    actions: {
      document: { url: "/assets/ba-fleet-optimisation-wex.pdf", label: "Report" },
    },
    image: "/e190.webp",
    featured: false,
  },
  {
    name: "How can we make the aviation industry more sustainable?",
    dates: "Summer 2023",
    skills: ["Research Skills", "Writing Skills"],
    description:
      "I created a mini-dissertation with my research into SAFs (Sustainable Aviation Fuels) and Hydrogen as sustainable fuel alternatives for modern aircraft.",
    actions: {
      document: { url: "/assets/how-can-we-make-the-aviation-industry-more-sustainable.pdf", label: "Research Paper" },
    },
    image: "/saf.webp",
    featured: false,
  },
  {
    name: "Tech, AI and aviation blog",
    dates: "September 2024 - Present",
    skills: ["Research Skills", "Writing Skills", "Blogging"],
    description: "I've been maintaining a blog on Substack for the past year, posting once a fortnight.",
    actions: {
      website: { url: "https://samueljforrest.substack.com", label: "Substack" },
    },
    image: "/blog.webp",
    featured: false,
  },
  {
    name: "Screenfine: A Screen Time App",
    dates: "Spring 2025",
    skills: ["React", "Framer Motion", "Swift", "IOS Development"],
    description:
      "ScreenFine is a conceptual app idea, where the user has to pay to extend their screen time limits. I will likely build when I have more time on my hands.",
    actions: {
      github: { url: "https://github.com/samuelforrest/screenfine.samuelforrest.me" },
      website: { url: "https://screenfine.samuelforrest.me" },
    },
    image: "/screenfine.webp",
    featured: false,
  },
  {
    name: "The Revision Podcast",
    dates: "Summer 2025",
    skills: ["NotebookLM", "Spotify Creators"],
    description:
      "Podcast with two AI hosts, give it a listen - it's surprisingly good!",
    actions: {
      website: { url: "https://open.spotify.com/show/568FPtKmIlTgWgaDAfap03", label: "Spotify" },
    },
    image: "/therevisionpodcast.webp",
    featured: false,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured !== false);
};

export const getAllProjects = (): Project[] => {
  return projects;
};