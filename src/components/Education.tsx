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

const experiences: Experience[] = [
  {
    company: "St George's College Weybridge",
    role: "Academic Scholar A*AAA 8x Grade 9s at GCSE",
    duration: "September 2024 - June 2026",
    location: "In-person",
    description:
      "A Levels: Computing (A*), Physics (A), Mathematics (A), EPQ (A) predicted. Achieved GCSE Grades: 9999999987",
    skills: ["Information Technology", "Music", "AI", "Organisation Skills", "Mathematics", "Collaboration"],
    logo: "/sgc.webp",
    companyWebsite: "https://www.stgeorgesweybridge.com",
  },
  {
    company: "Newland House School",
    role: "Newland House School Alumni",
    duration: "September 2012 - July 2021",
    location: "In-person",
    description:
      "KS1-3, Awards in Achievement, Mathematics, Geography, Computer Science, French. Displayed leadership as a Prefect, charity events organiser, music captain and vice form captain.",
    skills: ["Charity Event Organisation", "Hardworing", "Music", "Fundraising", "Leadership"],
    logo: "/nhs.webp",
    companyWebsite: "https://newlandhouse.net",
  },
];

export default function Education() {
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

      <h1 className="text-2xl font-bold pt-10 pb-10">Education</h1>

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