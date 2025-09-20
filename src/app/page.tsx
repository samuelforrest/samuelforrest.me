"use client"

import Image from "next/image";
import Link from "next/link";
import ResumeCard from "@/components/ResumeCard";
import EducationCard from "@/components/EducationCard";
import ExtracurricularCard from "@/components/ExtracurricularCard";
import ProjectCarousel from "@/components/ProjectCarousel";


export default function Home() {
  return (
    <main className="m-8 md:mt-20 sm:ml-12 md:ml-25 lg:ml-45 xl:ml-60 2xl:ml-100 sm:mr-12 md:mr-25 lg:mr-45 xl:mr-60 2xl:mr-100">

      <section id="hero">
        <div className="flex items-center gap-15">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I&apos;m Samuel Forrest
          </h1>
          <Image
            src="/samuel-forrest-april-2025.webp"
            alt="Samuel Forrest"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
        <p>📍 London  🎂 17</p>
<p className="pt-10 md:text-xl">An aspiring <b>Software Engineer</b> and Entrepreneur, studying Maths, Physics, Computer Science, and EPQ at A Level. <b>Private Tutor & Web Developer.</b> Applying to Degree Apprenticeships & University.</p>
      </section>

      <section id="quick-links">
        <h1 className="text-2xl font-bold pt-10">Quick Links</h1>
        <div className="pt-5 pl-4 sm:pl-0 space-y-2">
          <div><Link href="https://www.google.com" className="text-blue-600 dark:text-blue-400 underline underline-offset-3 transition-colors">Curriculum Vitae (CV)</Link></div>
          <div><Link href="https://www.google.com" className="text-blue-600 dark:text-blue-400 underline underline-offset-3 transition-colors">Computer Science Tutoring</Link></div>
          <div><Link href="https://www.google.com" className="text-blue-600 dark:text-blue-400 underline underline-offset-3 transition-colors">Web Development Services</Link></div>
          <div><Link href="#projects" className="text-blue-600 dark:text-blue-400 transition-colors underline underline-offset-3">Top Projects</Link></div>
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-bold pt-10">Context</h1>
        <p className="pt-4">I started coding when I was 10, adventuring into HTML, CSS and Javascript. Fast forward to now I&apos;m 17, studying A Levels at St George&apos;s College, Weybridge, while building Tradelingo, an educational trading app for Gen Z. Along the way, I&apos;ve completed <Link href="#experience" className="underline underline-offset-4">work experience</Link> with British Airways, the AIIB, Amazon, HUDJO and Virgin Atlantic, while building my skills in teaching and communication as a tutor and developer. I have also participated in Hackathons, worked on <Link href="#projects" className="underline underline-offset-5">projects</Link> and enjoyed my <Link href="#extracurriculars" className="underline underline-offset-5">extracurriculars.</Link></p>
      </section>

      <section className="mb-8" id="experience">
        <h1 className="text-2xl font-bold pt-10 pb-10">Experience</h1>
        <ResumeCard />
      </section>

      <section className="mb-8">
        <h1 className="text-2xl font-bold pt-10 pb-10">Education</h1>
        <EducationCard />
      </section>

      <section className="mb-8" id="projects">
        <h1 className="text-2xl font-bold pt-10 pb-10">Top Projects</h1>
        <ProjectCarousel/>
      </section>

      <section id="extracurriculars" className="mb-8">
        <h1 className="text-2xl font-bold pt-10 pb-10">Extracurricular Journey</h1>
        <ExtracurricularCard />
      </section>

      <section id="references">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          
            <div className="space-y-3">
              <div className="text-3xl font-bold sm:text-5xl">
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
              
              <h2 className="text-3xl font-bold sm:text-5xl">
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

      <section>
        <footer>
          <div className="text-center pt-10 mb-25">
          
          <p className="text-sm md:text-sm/relaxed lg:text-base/relaxed xl:text-sm/relaxed">&copy; Samuel Forrest - All rights reserved</p>
          <p className="text-sm md:text-sm/relaxed lg:text-base/relaxed xl:text-sm/relaxed">Information is true, as to my best knowledge</p>
          </div>
        </footer>
      </section>


    </main>
  );
}
