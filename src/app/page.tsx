import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <Link href="https://app.cal.eu/samuelforrest">
        <BlurFade delay={BLUR_FADE_DELAY * 0.2}>
          <div className="w-full bg-black dark:bg-white text-white dark:text-black py-1 text-center font-medium">
            Schedule a call with me
          </div>
        </BlurFade>
      </Link>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="technical_skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Technical Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.technicalskills.map((technicalskill, id) => (
              <BlurFade
                key={technicalskill}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge key={technicalskill}>{technicalskill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="soft_skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Soft Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.softskills.map((softskill, id) => (
              <BlurFade
                key={softskill}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge key={softskill}>{softskill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="extracurriculars">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Extracurricular Journey</h2>
          </BlurFade>
          {DATA.extracurricular.map((extracurricular, id) => (
            <BlurFade
              key={extracurricular.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={extracurricular.company}
                logoUrl={extracurricular.logoUrl}
                altText={extracurricular.company}
                title={extracurricular.company}
                subtitle={extracurricular.title}
                href={extracurricular.href}
                badges={extracurricular.badges}
                period={`${extracurricular.start} ${
                  extracurricular.end ?? "Present"
                }`}
                description={extracurricular.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="services">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Services</h2>
          </BlurFade>
          {DATA.services.map((services, id) => (
            <BlurFade
              key={services.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={services.company}
                logoUrl={services.logoUrl}
                altText={services.company}
                title={services.company}
                subtitle={services.title}
                href={services.href}
                badges={services.badges}
                period={`${services.start} ${services.end ?? "Present"}`}
                description={services.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="tech-stack">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Tech Stack
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tech Focus
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here is the tech stack I'm focusing on mastering for 2026, to
              build scalable web and mobile applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  name: "React",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                  name: "Next.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                  invert: true,
                },
                {
                  name: "Vercel AI SDK",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
                },
                {
                  name: "TypeScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
                {
                  name: "React Native",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                  name: "Node.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
                {
                  name: "Supabase",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
                },
                {
                  name: "PostgreSQL",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                },
                {
                  name: "TailwindCSS",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                  name: "Python",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                },
              ].map((tech, id) => (
                <BlurFade
                  key={tech.name}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card">
                    <Avatar className="size-10">
                      <AvatarImage
                        src={tech.icon}
                        alt={tech.name}
                        className={`object-contain p-1 ${
                          tech.invert ? "dark:invert" : ""
                        }`}
                      />
                      <AvatarFallback className="text-xs">
                        {tech.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
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
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  on Linkedin
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Alternatively, pop an email over to{" "}
                <Link
                  href={DATA.contact.social.Email.url}
                  className="text-blue-500 hover:underline"
                >
                  sam@samuelforrest.me
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="references">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                References
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get a reference
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                If you would like references from previous employers or
                teachers, please get in touch and I will be happy to provide
                them. <br></br>Note: evidence of awards, experiences, some
                endorsements and references can be found{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  on Linkedin.
                </Link>{" "}
                <br></br>
                <br></br>
                <br></br>Work Experience Organisers
                <br></br>Computer Science Teacher
                <br></br>Tutees & Tutees' Parents
                <br></br>Saxophone Teacher
                <br></br>Business Partners
                <br></br>Head of year
                <br></br>Form Tutor
                <br></br>Teamates
                <br></br>Clients
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="footer">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-0 pb-10">
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            &copy; Samuel Forrest 2025<br></br>
            <br></br>Accurate to best of knowledge at time of publication
          </p>
        </div>
      </section>
    </main>
  );
}
