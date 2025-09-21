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
import { getFeaturedProjects } from "@/data/projects";
import Link from "next/link";

type CarouselApi = UseEmblaCarouselType[1];


export default function Projects() {
  const featuredProjects = getFeaturedProjects();
  
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
        {featuredProjects.map((project, idx) => (
          <CarouselItem key={idx} className="sm:basis-1/2 lg:basis-1/3">
            <motion.div
              whileHover={{ scale: 1.02 }}
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
        aria-label="Previous Project"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black text-white backdrop-blur-sm border shadow-md"
        onClick={scrollNext}
        aria-label="Next project"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </Carousel>

    <div className="flex justify-center pt-10">
      <Link href="/projects" className="text-sm underline-offset-4 underline inline-flex items-center gap-1">
        All projects archive
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
  
  );
}