"use client"

import Hero from "@/components/Hero";

import Links from "@/components/Links";

import Context from "@/components/Context";

import Experience from "@/components/Experience";

import Education from "@/components/Education";

import Projects from "@/components/Projects";

import Extracurriculars from "@/components/Extracurriculars";

import References from "@/components/References";

import Contact from "@/components/Contact";

import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="m-8 md:mt-20 sm:ml-12 md:ml-25 lg:ml-45 xl:ml-60 2xl:ml-100 sm:mr-12 md:mr-25 lg:mr-45 xl:mr-60 2xl:mr-100">

      <section id="hero">
        <Hero/>
      </section>

      <section id="links">
        <Links />
      </section>

      <section id="context">
        <Context />
      </section>
        
      <section className="mb-8" id="experience">
        <Experience />
      </section>

      <section className="mb-8" id="education">
        <Education />
      </section>

      <section className="mb-8" id="projects">
        <Projects/>
      </section>

      <section id="extracurriculars" className="mb-8">
        <Extracurriculars />
      </section>

      <section id="references">
        <References />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>

    </main>
  );
}
