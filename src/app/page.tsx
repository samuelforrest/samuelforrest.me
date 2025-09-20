"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link";
import ResumeCard from "@/components/ResumeCard";
import { motion } from "framer-motion";
import EducationCard from "@/components/EducationCard";
import ExtracurricularCard from "@/components/ExtracurricularCard";


export default function Home() {
  return (
    <main className="m-8 md:mt-20 sm:ml-12 md:ml-25 lg:ml-55 xl:ml-50 2xl:ml-100 sm:mr-12 md:mr-25 lg:mr-55 xl:mr-50 2xl:mr-100">

      <section>
        <div className="flex items-center gap-15">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I'm Samuel Forrest
          </h1>
          <Image
            src="/samuel-forrest-april-2025.webp"
            alt="Samuel Forrest"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
<p className="pt-10 md:text-xl">An aspiring Software Engineer and Entrepreneur, studying Maths, Physics, Computer Science, and EPQ at A Level. Private Tutor & Web Developer. Applying to Degree Apprenticeships & University.</p>
      </section>

      <section>
        <h1 className="text-2xl font-bold pt-10">Quick Links</h1>
        <div className="pt-5 pl-4 sm:pl-0 space-y-2">
          <div><Link href="https://www.google.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">Curriculum Vitae (CV)</Link></div>
          <div><Link href="https://www.google.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">Computer Science Tutoring</Link></div>
          <div><Link href="https://www.google.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">Web Development Services</Link></div>
          <div><Link href="https://www.google.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">Technical Blog</Link></div>
          <div><Link href="#projects" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">View Portfolio</Link></div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold pt-10">Context</h1>
        <p className="pt-4">I started coding when I was 10, adventuring into HTML, CSS and Javascript. Fast forward to now I&apos;m 17, studying A Levels at St George&apos;s College, Weybridge, while building Tradelingo, an educational trading app for Gen Z. Along the way, I&apos;ve completed work experience with British Airways, the AIIB, Amazon, HUDJO and Virgin Atlantic, while building my skills in teaching and communication as a tutor and developer. I have also participated in Hackathons, worked on projects and enjoyed my extracurriculars.</p>
      </section>

            <section className="mb-8">
              <h1 className="text-2xl font-bold pt-10 pb-10">Experience</h1>
              <ResumeCard />
            </section>

            <section className="mb-8">
              <h1 className="text-2xl font-bold pt-10 pb-10">Education</h1>
              <EducationCard />
            </section>

      <section className="mb-8" id="projects">

        <h1 className="text-2xl font-bold pt-10 pb-10">Latest Projects</h1>

        <Carousel 
          className="relative" 
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: true,   // Stops when user clicks arrows
              stopOnMouseEnter: false,   // Continues when mouse enters
              stopOnFocusIn: false,      // Continues when focused
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Personal Portfolio Website</CardTitle>
                    <CardDescription>September 2024 - Present</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <Image src="/samuelforrestlogo.png" alt="Personal Portfolio Website" width={500} height={500} className="rounded-lg w-full h-auto object-cover"/>
                    <p className="text-sm text-muted-foreground mt-3">
                      A modern, responsive portfolio website showcasing my projects and skills. Built with cutting-edge technologies for optimal performance.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2 w-full">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs">Next.js</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-md text-xs">Tailwind CSS</span>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button size="sm" variant="outline" className="flex-1 cursor-pointer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button size="sm" className="flex-1 cursor-pointer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">E-Commerce Platform</CardTitle>
                    <CardDescription>July 2024 - August 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 ">
                    <Image src="/howlinfunnylogo.png" alt="E-Commerce Platform" width={500} height={500} className="rounded-lg w-full h-auto object-cover"/>
                    <p className="text-sm text-muted-foreground mt-3">
                      Full-featured e-commerce solution with payment processing, inventory management, and admin dashboard. Scalable architecture built for growth.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2 w-full">
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-md text-xs">React</span>
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-md text-xs">Node.js</span>
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-md text-xs">PostgreSQL</span>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button size="sm" variant="outline" className="flex-1 cursor-pointer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button size="sm" className="flex-1 cursor-pointer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Weather Dashboard</CardTitle>
                    <CardDescription>May 2024 - June 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <Image src="/samuelforrestlogo.png" alt="Weather Dashboard" width={500} height={500} className="rounded-lg w-full h-auto object-cover"/>
                    <p className="text-sm text-muted-foreground mt-3">
                      Real-time weather tracking application with interactive maps, forecasts, and personalized weather alerts. Clean, intuitive interface design.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2 w-full">
                      <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-md text-xs">Vue.js</span>
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-md text-xs">JavaScript</span>
                      <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 rounded-md text-xs">Chart.js</span>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button size="sm" variant="outline" className="flex-1 cursor-pointer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button size="sm" className="flex-1 cursor-pointer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Task Management App</CardTitle>
                    <CardDescription>March 2024 - April 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <Image src="/samuelforrestlogo.png" alt="Task Management App" width={500} height={500} className="rounded-lg w-full h-auto object-cover"/>
                    <p className="text-sm text-muted-foreground mt-3">
                      Collaborative task management platform with real-time updates, team collaboration features, and progress tracking. Built for productivity.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2 w-full">
                      <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-md text-xs">Angular</span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md text-xs">Express.js</span>
                      <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-md text-xs">MongoDB</span>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button size="sm" variant="outline" className="flex-1 cursor-pointer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button size="sm" className="flex-1 cursor-pointer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </section>

      <section className="mb-8">
              <h1 className="text-2xl font-bold pt-10 pb-10">Extracurricular Journey</h1>
              <ExtracurricularCard />
      </section>

      <section id="references">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          
            <div className="space-y-3">
              <div className="text-3xl font-bold tracking-tighter sm:text-5xl">
                References
              </div>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                If you would like references from previous employers or teachers, please get in touch and I will be happy to provide them.
              </p>
            </div>
          
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href="https://www.google.com"
                  className="text-blue-500 hover:underline"
                >
                  on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. Or email me: <Link href="mailto:sam@samuelforrest.me" className="text-blue-500 hover:underline">sam@samuelforrest.me</Link>
              </p>
            </div>
          
          
        </div>
      </section>


    </main>
  );
}
