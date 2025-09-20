import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent } from "./ui/carousel";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

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
    dates: "June 2025 - Present",
    skills: ["Vite + React", "Vite", "TailwindCSS", "Shadcn UI", "SEO"],
    description:
      "I designed and built a website for a Cat Carer, constantly providing updates to the client and ensuring the website met their expectations. Notebaly, the SEO was greatly improved, ranking the website #2 for 'cat care' in my client's area.",
    github_docs_link: "https://github.com/samuelforrest/zoecc.co.uk",
    open_link: ["https://zoecc.co.uk"],     
    image: "/zoecc.webp",
},
{
  name: "Client: BioNewsWeekly",
  dates: "May 2025 - Present",
  skills: ["React", "Vite", "TypeScript", "TailwindCSS", "OpenAi API"],
  description:
    "I built a website for a client needing a site to display biology news. The website included AI article summaries, an admin CMS system and user accessibility features.",
  github_docs_link: "https://github.com/samuelforrest/bionewsweekly.com",
  open_link: ["https://bionewsweekly"],     
  image: "/bionewsweekly.png",
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
  },
  {
    name: "Hackathon Winner: Verda",
    dates: "May 2025",
    skills: ["Nextjs", "TypeScript", "TailwindCSS", "Gemini API", "Presentation Skills",],
    description:
      "My teammate and I won a £300 environmental prize at KTHack25, a 30-hour hackathon.",
    github_docs_link: "https://github.com/samuelforrest/verdapp.xyz",
    open_link: ["https://devpost.com/software/verda-edo7uq"],     
    image: "/verda.png",
  },
  {
    name: "EPQ: Supersonic Aviation",
    dates: "September 2024 - June 2025",
    skills: ["Researching", "Presentation Skills", "Microsoft Word",],
    description:
      "I completed an EPQ with the question, 'To what extent is it feasible to reintroduce commmerical supersonic aviation by the year 2040?'",
    github_docs_link: "/documents/epq_abstract.pdf",
    open_link: ["/documents/epq_abstract.pdf"],     
    image: "/boom.webp",
  },
  {
    name: "Sitro.io",
    dates: "Summer 2025 - Present",
    skills: ["Nextjs", "Openai API", "Inngest", "Prisma", "Sandboxes", "Clerk"],
    description:
      "An AI Landing Page generator, to be released.",
    github_docs_link: "https://sitro.io",
    open_link: ["https://sitro.io"],     
    image: "/sitro.jpeg",
  },
];


export default function Projects() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  );
  
  const [api, setApi] = useState<CarouselApi>(undefined);

  const scrollPrev = () => {
    autoplay.current.stop();
    api?.scrollPrev();
  };

  const scrollNext = () => {
    autoplay.current.stop();
    api?.scrollNext();
  };

  return (
    <div className="relative">

      <h1 className="text-2xl font-bold pt-10 pb-10">Projects</h1>

      <Carousel
        className="relative"
        plugins={[autoplay.current]}
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
      <CarouselContent>
        {projects.map((project, idx) => (
          <CarouselItem key={idx} className="sm:basis-1/2 lg:basis-1/3">
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
      
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black text-white backdrop-blur-sm border shadow-md"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black text-white backdrop-blur-sm border shadow-md"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </Carousel>
    </div>
  );
}