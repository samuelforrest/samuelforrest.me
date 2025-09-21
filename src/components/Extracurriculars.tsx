"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useState } from "react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo?: string;
}

const experiences: Experience[] = [
  {
    company: "St Geeorge's College Weybridge",
    role: "Academic Scholarship Program",
    duration: "Present",
    description:
      "A Levels: Computing (A*), Physics (A), Mathematics (A), EPQ (A) predicted. Achieved GCSE Grades: 9999999987",
    logo: "/sgc.webp",
  },
  {
    company: "MTB (Music Teachers Board)",
    role: "Grade 7 Saxophone",
    duration: "Awarded April 2024",
    description:
      "I was awarded Grade 7 Saxophone by MTB in April 2024.",
    logo: "/mtb.webp",
  },
  {
    company: "ABRSM",
    role: "Grade 4 Piano",
    duration: "Awarded March 2020",
    description:
      "I was awarded Grade 4 Piano by ABRSM, in March 2020.",
    logo: "/abrsm.webp",
  },
  {
    company: "DofE (Duke of Edinburugh)",
    role: "DofE Silver & Bronze",
    duration: "Awarded September 2021",
    description:
      "Completed 40 hours of volunteering and around 40 hours of skills (coding).",
    logo: "/dofe.webp",
  },
  {
    company: "MonkeyType",
    role: "Touch typing 100WPM + 95% accuracy",
    duration: "Verified September 2025",
    description:
      "After touch typing courses, I can type at a speed of 100 WPM (Words per minute), with 95% accuracy.",
    logo: "/monkeytype.webp",
  },
  {
    company: "Bebras / RaspberryPi",
    role: "Bebras Challenge - Gold Award",
    duration: "Awarded December 2022",
    description:
      "I was awarded Gold Award in the Bebras Challenge (by Cambdrige / RaspberryPi) in December 2022.",
    logo: "/bebras.webp",
  },
  {
    company: "UKMT (UK Maths Trust)",
    role: "Senior UKMT - Bronze Award",
    duration: "Awarded September 2024",
    description:
      "I was awarded Bronze in the Senior UKMT in December 2022. I compete in this challenge every year.",
    logo: "/ukmt.webp",
  },
  {
    company: "DOAC",
    role: "Listening to podcasts",
    duration: "Present",
    description:
      "I listen to podcasts daily, my favourites including the Diary of a CEO, Lightcone Podcast (Y-Combinator) and Mentour Pilot.",
    logo: "/doac.webp",
  },
  {
    company: "Samuel Forrest",
    role: "Bike Rides & Fundraising",
    duration: "Last 7 Years",
    description:
      "I cycled London to Brighton (£500 raised), London to Paris (£500 raised), London to Bath, and Vienna to Budapest via Bratislava (Danube River).",
    logo: "/bikeride.webp",
  },
  {
    company: "Samuel Forrest",
    role: "Custom PC Building",
    duration: "Present",
    description:
      "I've built PCs for myself, friends and family from scratch.",
    logo: "/pc.webp",
  },
  {
    company: "SGCBC Rowing Club)",
    role: "SGCBC Rowing Club",
    duration: "2021-Early2025",
    description:
      "Dedicated 8 hours a week to the Rowing Club from 2021-Early2025.",
    logo: "/sgc.webp",
  },
  {
    company: "Samuel Forrest",
    role: "Computer Science, AI & Aviation Blog",
    duration: "Awarded December 2022",
    description:
      "Writing my opinions on the latest news in these fields of my interest. Now hosted on Substack.",
    logo: "/sf.webp",
  },
  {
    company: "Apprentice Nation",
    role: "Apprentice Nation Mentee",
    duration: "Present",
    description:
      "Apprentice Nation is an award-winning platform that unites major brands, top UK talent and the power of music to inspire and engage youth into careers they love.",
    logo: "/apprenticenation.webp",
  },
  {
    company: "BCS",
    role: "British Computing Society Member",
    duration: "Present",
    description:
      "I'm a student member of the British Computer Society (BCS), demonstrating commitment to professional development and engagement with the wider computing community",
    logo: "/bcs.webp",
  },
];

export default function Extracurriculars() {
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

      <h1 className="text-2xl font-bold pt-10 pb-2">Extracurriculars</h1>
      <p className="pb-10">I&apos;m always learning new skills and exploring new hobbies. Certificates for certain activities can be found on my LinkedIn.</p>

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
              
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}