import Link from "next/link";
import { FileText, GraduationCap, Code, FolderOpen, Book } from "lucide-react";

export default function Links() {
    const links = [
        {
            href: "/assets/cv.pdf",
            title: "CV Download",
            icon: FileText,
            external: false
        },
        {
            href: "https://samueljforrest.substack.com",
            title: "Substack Blog",
            icon: Book,
            external: true
        },
        {
            href: "https://www.superprof.co.uk/gcse-igcse-computer-science-and-programming-tutor-taught-sixth-form-student-with-tutoring-experience-all-abilities-welcome.html",
            title: "Request Tutoring",
            description: "Computer Science lessons",
            icon: GraduationCap,
            external: true
        },
        {
            href: "https://form.typeform.com/to/yihbaIu7",
            title: "Request Web Development",
            icon: Code,
            external: true
        },
        {
            href: "#projects",
            title: "Projects",
            icon: FolderOpen,
            external: false
        }
    ];

    return(
        <div>
            <h1 className="text-2xl font-bold pt-10 pb-6">Top Links</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {links.map((link, index) => {
                    const Icon = link.icon;
                    const isProjectsLink = link.href === "#projects";
                    const hiddenOnMobile = isProjectsLink ? "hidden sm:flex" : "flex";
                    
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                            className={`group ${hiddenOnMobile} flex-col items-center p-3 rounded-lg border border-border/40 bg-card/30 hover:bg-card/60 hover:border-border/60 transition-all duration-200 hover:scale-103 hover:shadow-md`}
                        >
                            <Icon className="w-6 h-6 mb-2 text-primary group-hover:text-primary/80 transition-colors" />
                            <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                                {link.title}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}