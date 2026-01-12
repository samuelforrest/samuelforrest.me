type Project = {
  name: string;
  description: string;
  link: string;
  image?: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  logo?: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

type TechStack = {
  name: string;
  category: string;
  id: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Apprentadream",
    description:
      "Built a GDPR-compliant sign-up form, handing over 150 sign-ups per week.",
    link: "",
    image: "/apprentadream2.webp",
    id: "project1",
  },
  {
    name: "Bio News Weekly",
    description: "Developed a news website for a biology newspaper.",
    link: "",
    image: "/bionewsweekly.webp",
    id: "project2",
  },
  {
    name: "Zoe Cat Care",
    description: "Built a clean website for a local cat care business.",
    link: "",
    image: "/zoecc.webp",
    id: "project3",
  },
  {
    name: "EPQ Dissertation",
    description: "I produced an EPQ on Supersonic aviation",
    link: "",
    image: "/boom.webp",
    id: "project4",
  },
  {
    name: "Verda",
    description: "My teammate and I won a £300 prize at the KTHack Hackathon",
    link: "",
    image: "/verda2.webp",
    id: "project5",
  },
  {
    name: "Sitro.io",
    description: "An AI Landing Page generator, to be released.",
    link: "",
    image: "/sitro.webp",
    id: "project6",
  },
  {
    name: "British Airways Work Experience",
    description:
      "Researched options for a new aircraft type for airline shorthaul fleets based in the UK",
    link: "",
    image: "/e190.webp",
    id: "project7",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Apprentadream",
    title: "CTO",
    start: "Sep 2025",
    end: "Present",
    link: "",
    logo: "/apprentadream.webp",
    id: "work1",
  },
  {
    company: "Superprof",
    title: "Private Tutor",
    start: "Sep 2024",
    end: "Present",
    link: "",
    logo: "/superprof.webp",
    id: "work2",
  },
  {
    company: "Bookmark Reading Charity",
    title: "Volunteer Mentor",
    start: "Sep 2025",
    end: "Present",
    link: "",
    logo: "/bookmark.webp",
    id: "work3",
  },
  {
    company: "Forrest Studio",
    title: "Freelance Web Developer",
    start: "Jul 2025",
    end: "Present",
    link: "",
    logo: "/forrest-studio.webp",
    id: "work4",
  },
  {
    company: "British Airways",
    title: "Work Experience",
    start: "Jul 2025",
    end: "Sep 2025",
    link: "",
    logo: "/ba.webp",
    id: "work5",
  },
  {
    company: "Bath University",
    title: "Summer Course",
    start: "Jul 2025",
    end: "Jul 2025",
    link: "",
    logo: "/bath.webp",
    id: "work6",
  },
  {
    company: "AAIB",
    title: "Work Experience",
    start: "Apr 2025",
    end: "Apr 2025",
    link: "",
    logo: "/aaib.webp",
    id: "work7",
  },
  {
    company: "HUDJO",
    title: "Work Experience",
    start: "Aug 2024",
    end: "Oct 2024",
    link: "",
    logo: "/hudjo.webp",
    id: "work8",
  },
  {
    company: "Virgin Atlantic / Kingston University",
    title: "Summer Course",
    start: "Aug 2024",
    end: "Aug 2024",
    link: "",
    logo: "/virgin.webp",
    id: "work9",
  },
  {
    company: "St Michael's Church",
    title: "Volunteer Sound Engineer",
    start: "Jan 2017",
    end: "Jan 2023",
    link: "",
    logo: "/stmichaels.webp",
    id: "work10",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title:
      "Why it makes sense that Degree Apprenticeships are gaining popularity.",
    description:
      "In this article, I will discuss the recent rise in popularity of degree apprenticeships and examine why they are becoming a compelling alternative to traditional university.",
    link: "https://samueljforrest.substack.com/p/why-it-makes-sense-that-degree-apprenticeships",
    uid: "blog-1",
  },
  {
    title: "Diary of a CEO episodes that changed how I think",
    description:
      "In this article, I will discuss some of the recent Diary of a CEO Episodes, presented by Steven Bartlett, that have impacted my perspective on AI and entrepreneurialism.",
    link: "https://samueljforrest.substack.com/p/diary-of-a-ceo-episodes-that-changed",
    uid: "blog-2",
  },
  {
    title: "Is AI a bubble waiting to burst...",
    description:
      "My idea for this article stemmed from the disappointing release of GPT-5, which underwhelmed many in the tech world, in addition to reading MIT’s article.",
    link: "https://samueljforrest.substack.com/p/is-ai-a-bubble-waiting-to-burst",
    uid: "blog-3",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/samuelforrest",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/samueljforrest/",
  },
  {
    label: "Substack",
    link: "https://samueljforrest.substack.com/",
  },
  {
    label: "Devpost",
    link: "https://devpost.com/samueljforrest",
  },
];

export const TECH_STACK: TechStack[] = [
  {
    name: "React",
    category: "Frontend",
    id: "tech1",
  },
  {
    name: "Next.js",
    category: "Frontend",
    id: "tech2",
  },
  {
    name: "TypeScript",
    category: "Language",
    id: "tech3",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    id: "tech4",
  },
  {
    name: "Supabase",
    category: "Database",
    id: "tech5",
  },
  {
    name: "Python",
    category: "Backend",
    id: "tech6",
  },
  {
    name: "Vercel",
    category: "Deployment",
    id: "tech7",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    id: "tech8",
  },
  {
    name: "Figma",
    category: "Design",
    id: "tech9",
  },
];

export const EMAIL = "sam@samuelforrest.me";
export const PHONE = "+44 7453 446391";
export const PHONE_URL = "https://wa.me/7453446391";
