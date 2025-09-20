import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent } from "./ui/carousel";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  name: string;
  dates: string;
  description: string;
  skills: string[];
  github_docs_link: string;
  open_link: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: "Client: Cat Care Website",
    dates: "2024-2025",
    skills: ["Vite + React", "Vite", "TailwindCSS", "Shadcn UI", "SEO"],
    description:
      "I designed and built a website for a Cat Carer, constantly providing updates to the client and ensuring the website met their expectations. Notebaly, the SEO was greatly improved, ranking the website #2 for 'cat care' in my client's area.",
    github_docs_link: "https://github.com/your-repo",
    open_link: ["https://yourportfolio.com"],     
    image: "/zoecc.webp",
},
{
  name: "Client: BioNewsWeekly",
  dates: "2024-2025",
  skills: ["React", "Vite", "TypeScript", "TailwindCSS", "OpenAi API"],
  description:
    "I built a website for a client needing a site to display biology news. The website included AI article summaries, an admin CMS system and user accessibility features.",
  github_docs_link: "https://github.com/your-repo",
  open_link: ["https://yourportfolio.com"],     
  image: "/bionewsweekly.png",
},
  {
    name: "Tradelingo: Trading App",
    dates: "2024-2025",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    description:
      "Tradelingo is an educational trading app for Gen Z. It is currently in a private Alpha. It is being developed for my Computer Science NEA.",
    github_docs_link: "https://github.com/your-repo",
    open_link: ["https://yourportfolio.com"],     
    image: "/tradelingo.webp",
  },
  {
    name: "Hackathon Winner: Verda",
    dates: "2024-2025",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    description:
      "We won KTHack25 with this.",
    github_docs_link: "https://github.com/your-repo",
    open_link: ["https://yourportfolio.com"],     
    image: "/verda.png",
  },
  {
    name: "EPQ: Supersonic Aviation",
    dates: "2024-2025",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    description:
      "Delivering one-to-one computer science tutoring to students from diverse backgrounds, including those with special educational needs (SEND). Over 40 hours of lessons given to date, strengthening my communication, lesson planning, time management skills as well as developing empathy.",
    github_docs_link: "https://github.com/your-repo",
    open_link: ["https://yourportfolio.com"],     
    image: "/boom.webp",
  },
];

export default function ProjectCarousel() {
  return (
    <Carousel
      className="relative"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: true,
          stopOnMouseEnter: false,
          stopOnFocusIn: false,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {projects.map((project, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
            <motion.div
              whileTap={{ scale: 0.98 }}
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
                    alt={project.name}
                    width={500}
                    height={500}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  <p className="text-sm text-muted-foreground mt-3">
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
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-black text-white !opacity-100" />
      <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-black text-white !opacity-100" />
    </Carousel>
  );
}