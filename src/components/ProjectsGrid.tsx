"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { getAllProjects, type Project } from "@/data/projects";

interface ProjectsGridProps {
  projects?: Project[];
}

export default function ProjectsGrid({ projects: customProjects }: ProjectsGridProps = {}) {
  const displayProjects = customProjects || getAllProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {displayProjects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="h-full"
        >
          <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{project.name}</CardTitle>
              <CardDescription>{project.dates}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <Image
                src={project.image}
                alt={`${project.name} project screenshot`}
                width={500}
                height={300}
                className="rounded-lg w-full h-48 object-cover mb-3"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2 w-full">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 w-full">
                {project.github_docs_link && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 cursor-pointer"
                    asChild
                  >
                    <a
                      href={project.github_docs_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} documentation or source code`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Docs
                    </a>
                  </Button>
                )}
                {project.open_link?.[0] && (
                  <Button
                    size="sm"
                    className="flex-1 cursor-pointer"
                    asChild
                  >
                    <a
                      href={project.open_link[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live ${project.name} project`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}