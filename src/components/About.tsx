import Link from "next/link";

export default function About() {
    return(
        <div>
            <h1 className="text-2xl font-bold pt-10">About</h1>
            
            <p className="pt-4">I started coding when I was 10, adventuring into HTML, CSS and JavaScript. Fast forward to now I&apos;m 17, studying A Levels at St George&apos;s College, Weybridge, while building Tradelingo, an educational trading app for Gen Z. Along the way, I&apos;ve completed <Link href="#experience" className="underline underline-offset-4">work experience</Link> with British Airways, the AIIB, Amazon, HUDJO and Virgin Atlantic, while building my skills in teaching and communication as a tutor and developer. I have also participated in Hackathons, worked on <Link href="#projects" className="underline underline-offset-5">projects</Link> and enjoyed my <Link href="#extracurriculars" className="underline underline-offset-5">extracurriculars.</Link></p>
            <br></br>
            <p>I&apos;m looking for Degree Apprenticeships in Tech / Software Engineering, whilst applying to Uni.</p>
            
        </div>
    )
}