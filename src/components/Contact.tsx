import Link from "next/link";

export default function Contact() {
    return(
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
    )
}