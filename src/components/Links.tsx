import Link from "next/link";

export default function Links() {
    return(
        <div>
            <h1 className="text-2xl font-bold pt-10">Quick Links</h1>
            <div className="pt-5 pl-4 sm:pl-0 space-y-2">
                <div><Link href="/documents/cv.pdf" className="text-blue-600 dark:text-blue-400 underline underline-offset-3 transition-colors">Curriculum Vitae (CV)</Link></div>
                <div><Link href="https://samueljforrest.substack.com" className="text-blue-600 dark:text-blue-400 underline underline-offset-3 transition-colors">Blog (Substack)</Link></div>
                <div><Link href="https://www.superprof.co.uk/gcse-igcse-computer-science-and-programming-tutor-taught-sixth-form-student-with-tutoring-experience-all-abilities-welcome.html" className="text-blue-600 dark:text-blue-400 underline underline-offset-3 transition-colors">Computer Science Tutoring</Link></div>
                <div><Link href="https://form.typeform.com/to/yihbaIu7" className="text-blue-600 dark:text-blue-400 underline underline-offset-3 transition-colors">Web/App Development Request Form</Link></div>
                <div><Link href="#projects" className="text-blue-600 dark:text-blue-400 transition-colors underline underline-offset-3">Projects</Link></div>
            </div>
        </div>
    )
}