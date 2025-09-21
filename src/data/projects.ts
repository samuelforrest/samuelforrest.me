export interface Project {
  name: string;
  dates: string;
  description: string;
  skills: string[];
  github_docs_link: string;
  open_link: string[];
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Client: Cat Care Website",
    dates: "June 2025 - Present",
    skills: ["Vite + React", "Vite", "TailwindCSS", "Shadcn UI", "SEO"],
    description:
      "I designed and built a website for a Cat Carer, constantly providing updates to the client and ensuring the website met their expectations. Notebaly, the SEO was greatly improved, ranking the website #2 for 'cat care' in my client's area.",
    github_docs_link: "https://github.com/samuelforrest/zoecc.co.uk",
    open_link: ["https://zoecc.co.uk"],     
    image: "/zoecc.webp",
    featured: true,
  },
  {
    name: "Client: BioNewsWeekly",
    dates: "May 2025 - Present",
    skills: ["React", "Vite", "TypeScript", "TailwindCSS", "OpenAi API"],
    description:
      "I built a website for a client needing a site to display biology news. The website included AI article summaries, an admin CMS system and user accessibility features.",
    github_docs_link: "https://github.com/samuelforrest/bionewsweekly.com",
    open_link: ["https://bionewsweekly"],     
    image: "/bionewsweekly.webp",
    featured: true,
  },
  {
    name: "Tradelingo: Trading App",
    dates: "September 2024 - Present",
    skills: ["React Native", "Figma", "Documentation", "Nativewind", "Polygon.io (Financial APIs)"],
    description:
      "Tradelingo is an educational trading app for Gen Z. It is currently in a private Alpha. It is being developed for my Computer Science NEA.",
    github_docs_link: "https://tradelingo.samuelforrest.me",
    open_link: ["https://tradelingo.samuelforrest.me"],     
    image: "/tradelingo.webp",
    featured: true,
  },
  {
    name: "Hackathon Winner: Verda",
    dates: "May 2025",
    skills: ["Nextjs", "TypeScript", "TailwindCSS", "Gemini API", "Presentation Skills"],
    description:
      "My teammate and I won a £300 environmental prize at KTHack25, a 30-hour hackathon.",
    github_docs_link: "https://github.com/samuelforrest/verdapp.xyz",
    open_link: ["https://devpost.com/software/verda-edo7uq"],     
    image: "/verda.webp",
    featured: true,
  },
  {
    name: "EPQ: Supersonic Aviation",
    dates: "September 2024 - June 2025",
    skills: ["Researching", "Presentation Skills", "Microsoft Word"],
    description:
      "I completed an EPQ with the question, 'To what extent is it feasible to reintroduce commmerical supersonic aviation by the year 2040?'",
    github_docs_link: "/assets/epq_abstract.pdf",
    open_link: ["/assets/epq_abstract.pdf"],     
    image: "/boom.webp",
    featured: false,
  },
  {
    name: "Sitro.io",
    dates: "Summer 2025 - Present",
    skills: ["Nextjs", "Openai API", "Inngest", "Prisma", "Sandboxes", "Clerk"],
    description:
      "An AI Landing Page generator, to be released.",
    github_docs_link: "https://sitro.io",
    open_link: ["https://sitro.io"],     
    image: "/sitro.webp",
    featured: true,
  },
  {
    name: "Personal Website: v5",
    dates: "September 2025",
    skills: ["React", "TailwindCSS", "Framer Motion", "Nextjs"],
    description:
      "Fifth edition of my personal website. It's a modern portfolio website built with Next.js, featuring animated UI components, and a clean, professional design.",
    github_docs_link: "https://github.com/samuelforrest/samuelforrest.me",
    open_link: ["https://samuelforrest.me"],     
    image: "/sf.webp",
    featured: false,
  },
  {
      name: "BA Fleet Optimisation Work Experience",
      dates: "September 2025",
      skills: ["Research Skills", "Presentation Skills"],
      description:
      "Researched options for a new aircraft type for airline shorthaul fleets based in the UK, including presenting to a member of the British Airways fleet team, developing my analytical and presentation skills.",
      github_docs_link: "/assets/ba-fleet-optimisation-wex.pdf",
      open_link: ["/assets/ba-fleet-optimisation-wex.pdf"],     
      image: "/e190.webp",
      featured: false,
    },
    {
        name: "How can we make the aviation industry more sustainable?",
        dates: "Summer 2023",
        skills: ["Research Skills", "Writing Skills"],
        description:
        "I created a mini-dissertation with my research into SAFs (Sustainable Aviation Fuels) and Hydrogen as sustainable fuel alternatives for modern aircraft.",
        github_docs_link: "/assets/how-can-we-make-the-aviation-industry-more-sustainable.pdf",
        open_link: ["/assets/how-can-we-make-the-aviation-industry-more-sustainable.pdf"],     
        image: "/saf.webp",
        featured: false,
      },
    {
      name: "Screenfine: A Screen Time App",
      dates: "Spring 2025",
      skills: ["React", "Framer Motion", "Swift", "IOS Development"],
      description:
        "ScreenFine is a conceptual app idea, where the user has to pay to extend their screen time limits. I will likely build when I have more time on my hands.",
      github_docs_link: "https://github.com/samuelforrest/screenfine.netlify.app",
      open_link: ["https://screenfine.netlify.app"],     
      image: "/screenfine.webp",
      featured: false,
    },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured !== false);
};

export const getAllProjects = (): Project[] => {
  return projects;
};