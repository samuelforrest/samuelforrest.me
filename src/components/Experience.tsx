"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  logo?: string;
  companyWebsite?: string;
}

// ALL EXPERIENCES LISTED MUST MIMIC LINKEDIN, INCLUDING SKILLS AND DATES

const experiences: Experience[] = [
  {
    company: "Superprof",
    role: "Private Tutor @ Superprof",
    duration: "September 2024 - Present",
    location: "Remote",
    description:
      "Delivering one-to-one computer science tutoring to students from diverse backgrounds, including those with special educational needs (SEND). Over 40 hours of lessons given to date, strengthening my communication, lesson planning, time management skills as well as developing empathy.",
    skills: ["Tutoring", "Adaptability", "Homework Help", "Communication", "Organisation", "Empathy", "Python"],
    logo: "/superprof.webp",
    companyWebsite: "https://www.superprof.co.uk",
  },
  {
    company: "Tradelingo",
    role: "Founder @ Tradelingo",
    duration: "September 2024 - Present",
    location: "Remote",
    description:
      "Duolingo, but for trading. Designed and in the process of coding a cross-platform trading app for my Computer Science NEA, using: React Native, Expo, TypeScript, Nativewind, Polygon.io (financial API), Supabase Functions, Auth & DB, React Native Wagmi Charts and TradingView.",
    skills: ["TypeScript", "iOS Development", "Databases", "Nativewind", "React Native", "SQL", "Finance", "iOS Testing", "Android Development", "Figma"],
    logo: "/tradelingo.webp",
    companyWebsite: "https://tradelingo.app",
  },
  {
    company: "Freelance Web Developer",
    role: "Freelance Web Developer",
    duration: "March 2025 - Present",
    location: "Hybrid",
    description:
      "Designed, coded and deployed responsive websites for 3 paying clients, using TailwindCSS, React, TypeScript, Next.js, Supabase, Gemini API, Google Analytics, and integrating features such as authentication, admin dashboards, blogs and AI summaries. Most client projects are publicly available here: samuelforrest.me Communicated directly with clients to gather requirements and to provide progress updates throughout the development process and support to maintain the websites, strengthening client communication, active listening, and problem-solving skills.",
    skills: ["TypeScript", "React", "HTML5", "SEO", "Next.js", "Vite", "Supabase", "SQL"],
    logo: "/webdeveloper.webp",
  },
  {
    company: "Apprentadream",
    role: "Incoming @ Apprentadream",
    duration: "August 2025 - Present",
    location: "Hybrid",
    description:
      "Position to be confirmed",
    skills: [""],
    logo: "/apprentadream.webp",
  },
  {
    company: "Springpod",
    role: "13x Springpods WEX",
    duration: "June 2025 - Present",
    location: "Virtual",
    description:
      "Completed 13 Springpod work experiences with: Amazon & AWS, JLR, Siemens, Ideagen, Fujitsu and Barclays. Produced projects varying from sustainability ideas for JLR to database design for Barclays, learning about the essential soft & technical skills required in a software engineering career.",
    skills: ["Business Research", "Professional Development"],
    logo: "/springpod.webp",
    companyWebsite: "https://www.springpod.com",
  },
  {
    company: "British Airways",
    role: "British Airways WEX",
    duration: "June 2025 - September 2025",
    location: "Waterside Office, London Heathrow Airport",
    description:
      "Completed an insight day, for engineering degree apprenticeships. Researched and presented a proposal for a new aircraft type for the short-haul fleet to a member of the fleet operations team, developing my analytical and presentation skills.",
    skills: ["Networking", "Researching", "Presentation Skills"],
    logo: "/ba.webp",
    companyWebsite: "https://www.britishairways.com",
  },
  {
    company: "Bath",
    role: "Step into Bath Residential Course",
    duration: "July 2025",
    location: "Bath University, Onsite",
    description:
      "Selected to attend the competitive Step Into Bath residential summer school for Year 12 students, living in undergraduate accommodation and participating in social and networking events with current students and fellow applicants. Engaged in science-specific taster lectures and received tailored advice from admissions tutors on personal statements and competitive university applications.",
    skills: ["Networking", "Teamwork"],
    logo: "/bath.webp",
    companyWebsite: "https://www.bath.ac.uk",
  },
  {
    company: "Amazon",
    role: "Amazon Virtual WEX",
    duration: "July 2025",
    location: "Remote",
    description:
      "This experience provided valuable insight into the wide range of careers available at Amazon and Amazon Web Services, with an optional focused module on AI knowledge validation. I particularly enjoyed the module on Computer Science careers and apprenticeships, which deepened my understanding of the various pathways into the tech industry and the skills in highest demand. The transferrable employability skills module allowed me to evaluate which soft and technical skills I have strengths and weaknesses in, helping me to become more well-rounded.",
    skills: ["Career Awareness"],
    logo: "/amazon.webp",
    companyWebsite: "https://www.amazon.jobs/en/",
  },
  {
    company: "Kybyte Computer Academy",
    role: "Hackathon Winner",
    duration: "May 2025",
    location: "Remote",
    description:
      "Created Verda - an AI CO2 emission calculator and ML waste identifier. Environmental Prize £300 winner 🏅 Collaborated effectively with a teammate over the 30-hour hackathon, and an 8+ hour time zone difference. Utilised GitHub and produced thorough project documentation.",
    skills: ["Next.js", "TypeScript", "TailwindCSS", "Gemini API", "Presentation Skills"],
    logo: "/kthack.webp",
    companyWebsite: "https://www.ktbyte.com",
  },
  {
    company: "AAIB",
    role: "Air Accident Investigation Branch (AAIB) WEX",
    duration: "April 2025",
    location: "Farnborough Airport",
    description:
      "Gained first-hand insight into how air crashes are investigated in the UK, by examining black box data, aircraft systems data and inspecting recovered aircraft in the AAIB hangar. Strengthened attention to detail, technical observation, and professional communication skills in such a serious and sensitive safety-critical work environment.",
    skills: ["Attention to detail"],
    logo: "/aaib.webp",
    companyWebsite: "https://www.gov.uk/government/organisations/air-accidents-investigation-branch",
  },
  {
    company: "HUDJO",
    role: "App Startup Work Experience",
    duration: "August 2024 - October 2024",
    location: "Remote",
    description:
      "Explored cross-platform mobile development by shadowing a startup developer at HUDJO, an app focused on bike parking solutions at local businesses in London, which recently received funding from Deliveroo. Introduced to Javascript, Typescript and the Expo framework, learning how cross-platform apps are built, from a former Google & Yandex software engineer.",
    skills: ["Expo", "JavaScript", "TypeScript"],
    logo: "/hudjo.webp",
    companyWebsite: "https://www.hudjo.com",
  },
  {
    company: "Vatsim",
    role: "Trainee Virtual Air Traffic Controller & Pilot",
    duration: "July 2023 - Present",
    location: "Remote",
    description:
      "Gained practical and theoretical insight into aerodynamics and aerospace engineering, with hands-on experience with flight simulators and wind tunnel experiments at Kingston University, London. Part of a 4-person team designing and presenting a glider to an audience of 100+ students; won the final competition, showcasing teamwork, leadership, problem-solving and perseverance.",
    skills: ["Multitasking", "Decision-Making", "Stress Management", "Self Learning"],
    logo: "/vatsim.webp",
    companyWebsite: "https://www.vatsim.net",
  },
  {
    company: "Virgin Atlantic",
    role: "Virgin Aerospace Engineering Course",
    duration: "August 2024",
    location: "Kingston University",
    description:
      "Gained practical and theoretical insight into aerodynamics and aerospace engineering, with hands-on experience with flight simulators and wind tunnel experiments at Kingston University, London. Part of a 4-person team designing and presenting a glider to an audience of 100+ students; won the final competition, showcasing teamwork, leadership, problem-solving and perseverance.",
    skills: ["Teamwork", "Presentation Skills", "Problem Solving", "Perseverant", "Leadership"],
    logo: "/virgin.webp",
    companyWebsite: "https://www.virginatlantic.com",
  },
  {
    company: "St Michaels Fulwell",
    role: "Church Sound Engineer - Volunteer",
    duration: "December 2017 - June 2023",
    location: "St Michaels Fulwell",
    description:
      "Volunteered 2 hours every Sunday, managing the audio and visuals at the church, displaying song lyrics in sync with the band and ensuring balanced and clear sound levels of microphones and instruments. Developed technical sound skills in sound mixing, equipment setup, and YouTube live-streaming, alongside developing critical thinking skills and remaining calm under pressure, over 6 years.",
    skills: ["Calm Under Pressure", "Multitasking", "Teamwork", "Critical Thinking"],
    logo: "/stmichaels.webp",
    companyWebsite: "https://www.stmichaelsfulwell.co.uk",
  },
];

export default function Experience() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="w-full space-y-3">

      <h1 className="text-2xl font-bold pt-10 pb-6">Experience</h1>
      
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          layout
          className="bg-card text-card-foreground rounded-lg border px-6 pt-4 pb-0 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => toggleCard(index)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-start space-x-4">
            <Avatar className="w-12 h-12 flex-shrink-0">
              <AvatarImage src={experience.logo} alt={experience.company} />
              <AvatarFallback>
                {experience.company
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-m font-semibold text-gray-900 dark:text-white sm:truncate">
                  {experience.role}
                </h3>
                <motion.div
                  animate={{ rotate: expandedCards.has(index) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-2"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width dropdown content on mobile */}
          <motion.div
            initial={false}
            animate={{
              height: expandedCards.has(index) ? "auto" : 0,
              opacity: expandedCards.has(index) ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden w-full"
          >
            <div className="pb-4 sm:ml-16">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {experience.description}
              </p>
              {experience.companyWebsite && (
                <a
                  href={experience.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4 text-sm font-medium transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit {experience.company}</span>
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}