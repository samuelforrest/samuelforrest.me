
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const skills = [
    "HTML/CSS", 
    "TypeScript", 
    "React Native",
    "Git/GitHub",
    "AI",
    "Problem Solving",
    "Communication",
    "Public Speaking",
  ];

  const achievements = [
    "Academic scholarships for excellence (2022 & Sixth Form)",
    "Duke of Edinburgh Award (Bronze & Silver), demonstrating resilience and teamwork",
    "Music – Grade 7 Saxophone and Grade 4 Piano",
    "Won aerospace competition hosted by Virgin Atlantic",
    "Won the KTHack25, with a functional MVP, receiving £300"
  ];

  const interests = [
    "Flight simulation enthusiast (VATSIM events as pilot and air traffic controller)",
    "Rowed for three years, earning medals in various races",
    { text: "Running a Blog exploring Computing, AI and Aviation", link: "https://samuelforrest.me/blog" },
    "Aerospace engineering and aviation technology"
  ];

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-narrow">
        <h2 className="section-heading animate-fade-in opacity-0 [animation-fill-mode:forwards]">About Me</h2>
        
        {/* Introduction and Education Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
          <div className="col-span-1 lg:col-span-3 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                I'm a highly motivated student with a keen interest in technology, aviation, and engineering. 
                Passionate about developing websites and applications, I am eager to gain practical experience 
                in software engineering or aviation, where I can apply my problem-solving and coding skills.
              </p>
              <p className="text-lg leading-relaxed animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                Currently studying A-Levels in Computer Science, Mathematics, Physics, and working on an EPQ 
                focused on the reintroduction of supersonic air transport.
              </p>
              <p className="text-lg leading-relaxed animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                I'm particularly interested in roles where I can contribute to innovative projects and learn new skills.
              </p>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 font-serif">Education</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">St George's College, Weybridge</h4>
                      <span className="text-sm text-muted-foreground">2024-Present</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">A Level Student</p>
                    <p className="text-sm">Computer Science, Mathematics, Physics, and EPQ</p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">St George's College, Weybridge</h4>
                      <span className="text-sm text-muted-foreground">2021-2024</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">GCSE Student</p>
                    <div className="text-xs space-y-1">
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <span>English Literature <strong>9</strong></span>
                        <span>Biology <strong>9</strong></span>
                        <span>Chemistry <strong>9</strong></span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <span>English Language <strong>9</strong></span>
                        <span>Latin <strong>7</strong></span>
                        <span>Physics <strong>9</strong></span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <span>Computing <strong>9</strong></span>
                        <span>Mathematics <strong>8</strong></span>
                        <span>Geography <strong>9</strong></span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <span>Religious Studies <strong>9</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Main Content Grid - Work Experience and Personal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Card */}
          <div className="animate-fade-in opacity-0 [animation-delay:1800ms] [animation-fill-mode:forwards]">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 font-serif">Work Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">Freelance Private Tutor</h5>
                      <span className="text-sm text-muted-foreground">Oct 2024-Present</span>
                    </div>
                      <ul className="text-sm">
                        <li>•	Delivering one-to-one tutoring to Computer Science students from diverse backgrounds, including those with special educational needs (SEND). Over 45 hours of lessons given to date.</li><br></br>
                        <li>•	Strengthened key interpersonal skills such as clear communication, structured lesson planning, time management and the ability to provide empathetic and tailored constructive feedback.</li>
                      </ul>
                  </div>
                                    <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">Freelance Web Developer</h5>
                      <span className="text-sm text-muted-foreground">May 2025-Present</span>
                    </div>
                    <ul className="text-sm">
                      <li>•	Designed, coded and deployed responsive websites for 3 paying clients, using TailwindCSS, React, Next.js, Supabase, Gemini API, Google Analytics, and integrating features such as authentication, admin dashboards, blogs and AI summaries.
                      <a href="/hire" className="text-primary hover:underline font-medium"> Hire Me</a>
                    </li> <br></br>
                    <li>•	Communicated directly with clients to gather requirements and to provide progress updates throughout the development process and support to maintain the websites, strengthening client communication, active listening, and problem-solving skills.</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">App Development Shadowing – HUDJO</h5>
                      <span className="text-sm text-muted-foreground">Aug-Sept 2024</span>
                    </div>
                    <ul className="text-sm">
                      <li>•	Shadowed development team at a bike app startup recently funded by Deliveroo, gaining insights into agile development methodologies and startup culture.</li><br></br>
                      <li>•	Observed real-world application development processes, strengthening understanding of collaborative software engineering and project management practices.</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">3-Day Aerospace Course</h5>
                      <span className="text-sm text-muted-foreground">Aug-Sept 2024</span>
                    </div>
                    <ul className="text-sm">
                      <li>•	Attended intensive aerospace course at Kingston University hosted by Virgin Atlantic, covering aircraft design principles and aviation industry insights.</li><br></br>
                      <li>•	Won team competition through effective collaboration and innovative problem-solving, improving communication and leadership skills in high-pressure environments.</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">Air Accident Investigation Branch (AAIB)</h5>
                      <span className="text-sm text-muted-foreground">April 2025</span>
                    </div>
                    <ul className="text-sm">
                      <li>•	Visited the AAIB headquarters and engaged with aviation safety professionals including engineering inspectors and flight data extraction specialists.</li><br></br>
                      <li>•	Gained valuable insights into aviation safety protocols and investigation processes, strengthening understanding of aerospace engineering applications in real-world scenarios.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Achievements and Interests Column */}
          <div className="space-y-12">
            <div className="animate-fade-in opacity-0 [animation-delay:2000ms] [animation-fill-mode:forwards]">
              <h4 className="text-2xl font-bold mb-6 font-serif">Achievements</h4>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${2200 + index * 100}ms` }}>
                    <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in opacity-0 [animation-delay:2700ms] [animation-fill-mode:forwards]">
              <h4 className="text-2xl font-bold mb-6 font-serif">Interests</h4>
              <div className="space-y-2">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${2900 + index * 100}ms` }}>
                    <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                    {typeof interest === 'string' ? (
                      <p className="text-sm leading-relaxed">{interest}</p>
                    ) : (
                      <p className="text-sm leading-relaxed">
                        <a 
                          href={interest.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-primary/30 hover:decoration-primary/60"
                        >
                          {interest.text}
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in opacity-0 [animation-delay:3300ms] [animation-fill-mode:forwards]">
              <h4 className="text-2xl font-bold mb-6 font-serif">Soft & Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors duration-200 animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                    style={{ animationDelay: `${3500 + index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
