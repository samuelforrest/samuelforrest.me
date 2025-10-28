import ProjectsGrid from "@/components/ProjectsGrid";
import Link from "next/link";
import { ChevronLeft, ChevronUp } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm underline underline-offset-4 mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-7">
            Projects Archive
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl">
            All publicly available projects. Feel free to ask any questions.
          </p>
        </div>

        <ProjectsGrid />

        <div className="mt-13 mb-15 text-center">
          <Link
            href="#top"
            className="inline-flex items-center text-sm underline underline-offset-4"
          >
            <ChevronUp className="w-4 h-4 mr-2" />
            Back to top
          </Link>
        </div>
      </main>
    </div>
  );
}
