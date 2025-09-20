"use client"

import Link from "next/link";
import ResumeCard from "@/components/Experience";
import EducationCard from "@/components/Education";
import ExtracurricularCard from "@/components/Extracurriculars";
import ProjectCarousel from "@/components/Projects";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Context from "@/components/Context";


export default function Home() {
  return (
    <main className="m-8 md:mt-20 sm:ml-12 md:ml-25 lg:ml-45 xl:ml-60 2xl:ml-100 sm:mr-12 md:mr-25 lg:mr-45 xl:mr-60 2xl:mr-100">

      <section id="hero">
        <Hero/>
      </section>

      <section id="quick-links">
        <Links />
      </section>

      <section id="context">
        <Context />
      </section>
        
      <section className="mb-8" id="experience">
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
