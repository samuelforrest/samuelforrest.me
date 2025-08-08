
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
        
        {/* Introduction */}
        <div className="text-center mb-12 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            I'm a highly motivated student with a keen interest in technology, aviation, and engineering. 
            Passionate about developing websites and applications, I am eager to gain practical experience 
            in software engineering or aviation, where I can apply my problem-solving and coding skills.
          </p>
        </div>
        
        {/* CV Section */}
        <div className="mb-20 animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]">
          <div className="text-left mb-12">
            <h3 className="section-heading animate-fade-in opacity-0 [animation-fill-mode:forwards]">Web CV</h3>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm max-w-4xl mx-auto mb-8">
              <div>Phone: 07453 446391</div>
              <div>Email: sam@samuelforrest.me</div>
              <div>Website: samuelforrest.me</div>
              <div>Address: Teddington, London</div>
              <div>LinkedIn: @samueljforrest</div>
              <div>GitHub: @samuelforrest</div>
            </div>
          </div>

          {/* Education */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-6 font-serif">Education</h4>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                  <h5 className="font-semibold mb-2">St George's College, Weybridge (2021-Present)</h5>
                  
                  <div className="mb-4">
                    <h6 className="font-medium mb-2">A levels</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                      <div>Mathematics <b>B</b></div>
                      <div>Computer Science <b>A*</b></div>
                      <div>Physics <b>A</b></div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="font-medium mb-2">EPQ</h6>
                    <p className="text-sm">"To what extent is it feasible to reintroduce commercial supersonic aviation by the year 2040?" <strong>A*</strong></p>
                  </div>
                  
                  <div>
                    <h6 className="font-medium mb-3">GCSEs</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                      <div>English Literature <strong>9</strong></div>
                      <div>Biology <strong>9</strong></div>
                      <div>Chemistry <strong>9</strong></div>
                      <div>English Language <strong>9</strong></div>
                      <div>Geography <strong>9</strong></div>
                      <div>Physics <strong>9</strong></div>
                      <div>Computer Science <strong>9</strong></div>
                      <div>Mathematics <strong>8</strong></div>
                      <div>Latin <strong>7</strong></div>
                      <div>Religious Studies <strong>9</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-6 font-serif">Technical Skills</h4>
                <p className="text-sm leading-relaxed">
                  JavaScript, TypeScript, Git/Github, TailwindCSS, NativewindCSS, React, Next.js, APIs, CI/CD, 
                  Supabase, Firebase, Databases, SQL, Google Cloud, SEO, Python, Microsoft Office, Notion, 
                  VScode Claude/Gemini APIs, Analytical & Research Skills.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-6 font-serif">Interpersonal Skills</h4>
                <p className="text-sm leading-relaxed">
                  Communication, Time Management, Organisation, Presentation Skills, Analytical Thinking, 
                  Client Communication, Active Listening, Teamwork, Leadership, Critical Thinking, 
                  Multitasking, Stress Management, Collaboration.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Work Experience and Volunteering */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-6 font-serif">Work Experience and Volunteering</h4>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">Freelance Private Tutor</h5>
                    <span className="text-sm text-muted-foreground">Oct 2024-Present</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Delivering one-to-one tutoring to Computer Science students from diverse backgrounds, including those with special educational needs (SEND). Over 45 hours of lessons given to date.</li>
                    <li>• Strengthened key interpersonal skills such as clear communication, structured lesson planning, time management and the ability to provide empathetic and tailored constructive feedback.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">British Airways Work Experience (in-person)</h5>
                    <span className="text-sm text-muted-foreground">Jul-August 2025</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Conducted research into a potential new aircraft for the British Airways short-haul fleet, analysing data such as aircraft fuel efficiency, range, unit cost and operational costs.</li>
                    <li>• Work experience not yet complete. Ignore.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">Freelance Developer</h5>
                    <span className="text-sm text-muted-foreground">May 2025-Present</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Designed, coded and deployed responsive websites for 3 paying clients, using TailwindCSS, React, Next.js, Supabase, Gemini API, Google Analytics, and integrating features such as authentication, admin dashboards, blogs and AI summaries. Most client projects are publicly available here: <a href="/projects" className="text-primary hover:underline">samuelforrest.me/projects</a></li>
                    <li>• Communicated directly with clients to gather requirements and to provide progress updates throughout the development process and support to maintain the websites, strengthening client communication, active listening, and problem-solving skills.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">Air Accident Investigation Branch Work Experience (in-person)</h5>
                    <span className="text-sm text-muted-foreground">April 2025</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Gained first-hand insight into how air crashes are investigated in the UK, by examining black box data, aircraft systems data and inspecting recovered aircraft in the AAIB hangar.</li>
                    <li>• Strengthened attention to detail, technical observation, and professional communication skills in such a serious and sensitive safety-critical work environment.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">HUDJO App Development Work Experience (virtual)</h5>
                    <span className="text-sm text-muted-foreground">Aug-October 2024</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Explored cross-platform mobile development by shadowing a startup developer at HUDJO, an app focused on bike parking solutions at local businesses in London, which recently received funding from Deliveroo.</li>
                    <li>• Introduced to JavaScript, TypeScript and the Expo framework, learning how cross-platform apps are built, from a former Google & Yandex software engineer.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">Virgin Atlantic Aerospace Engineering Course (in-person)</h5>
                    <span className="text-sm text-muted-foreground">Aug 2024</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Gained practical and theoretical insight into aerodynamics and aerospace engineering, with hands-on experience with flight simulators and wind tunnel experiments at Kingston University, London.</li>
                    <li>• Collaborated in a 4-person team, winning the final competition by designing and creating the best glider aircraft, demonstrating teamwork, leadership, problem-solving and perseverance skills.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold">St Michael's Fulwell Audio & Visuals Team</h5>
                    <span className="text-sm text-muted-foreground">2017-2023</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Volunteered 2 hours every Sunday, managing the audio and visuals at the church, displaying song lyrics in sync with the band and ensuring balanced and clear sound levels of microphones and instruments.</li>
                    <li>• Developed technical sound skills in sound mixing, equipment setup, and YouTube live-streaming, alongside developing critical thinking skills and remaining calm under pressure, over 6 years.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements & Interests */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-6 font-serif">Key Achievements & Interests</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Honorary academic scholarship awarded for outstanding performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Won the environmental prize (£300) at an online Hackathon, KTHack25, showcasing my teammate's and my strong technical skills in coding and pitch presentation skills. Undertaking Hackathons on my own requires discipline and initiative, qualities which would be valuable and transferable to a degree apprenticeship.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Achieved Grade 7 Saxophone and Grade 5 Piano, awarded Music half-colours for my outstanding contribution, actively participating in both Jazz Band and Concert Band, developing discipline, teamwork, confidence and performance skills.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Flight simulation enthusiast, an active member of VATSIM as a pilot and air traffic controller, developing strong multitasking, quick decision-making and stress management as I coordinate aircraft in the Swiss airspace.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Silver & Bronze Duke of Edinburgh Award completed</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Yearly participation in the British Informatics Olympiad, Bebras and UK Maths Challenge</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Typing speed of 100 WPM with 96% accuracy (top 1%)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Interests */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-6 font-serif">Other Interests</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Rowing & Fitness:</strong> dedicated 8 hours a week to rowing from 2021-2025</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Computer Hardware:</strong> built PCs for myself, friends and family from scratch</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Blogging:</strong> Computer Science, Aviation and AI blog hosted on my website <a href="/blog" className="text-primary hover:underline">samuelforrest.me/blog</a></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Listening to Podcasts:</strong> Diary of a CEO, Lightcone Podcast (Y-Combinator), Mentour Pilot</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Bike Rides:</strong> London to Brighton BHF (£500 raised), London to Paris (£500 raised), London to Bath, and Vienna to Budapest via Bratislava (Danube River).</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 mb-4">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-6 font-serif">References</h4>
              <div className="text-sm">
                <p className="mb-2">Others are available upon request.</p>
                <p><strong>Azeem Jiwaji (Computer Science Teacher):</strong> AJiwaji@stgeorgesweybridge.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
