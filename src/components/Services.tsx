"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { CirclePoundSterling, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Service {
  type: string;
  price: string;
  description: string;
  logo?: string;
  link: string,
  linkName: string,
}

const services: Service[] = [
  {
    type: "Web & App Development",
    price: "Price available on request",
    description:
      "3 paid projects completed. My tech stack includes: HTML, CSS, JavaScript, TypeScript, Nativewind, TailwindCSS, React, React Native, Next.js, React+vite, Google Analytics, Google Search Console, SEO optimisation, AI APIs, Financial APIs, Python 3, Supabase, SQL, Databases, Figma",
    logo: "/webdeveloper.webp",
    link: "https://form.typeform.com/to/yihbaIu7",
    linkName: "Request web development form",
  },
  {
    type: "Computer Science Tutoring (GCSE & below)",
    price: "£15/hr",
    description:
      "I'm a passionate Computer Science tutor, with over 45 hours of experience. Experience with multiple different pupils, with varying levels of ability, learning styles and additional needs.",
    logo: "/cs.webp",
    link: "https://www.superprof.co.uk/gcse-igcse-computer-science-and-programming-tutor-taught-sixth-form-student-with-tutoring-experience-all-abilities-welcome.html",
    linkName: "Get your first lesson free",
  },
];

export default function Service() {
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

      <h1 className="text-2xl font-bold pt-10 pb-10">Services</h1>

      {services.map((service, index) => (
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
              <AvatarImage src={service.logo} alt={service.type}/>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-m font-semibold text-gray-900 dark:text-white sm:truncate">
                  {service.type}
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
                  <CirclePoundSterling className="w-4 h-4" />
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          </div>

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
                {service.description}
              </p>
              {service.link && (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4 text-sm font-medium transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{service.linkName}</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}