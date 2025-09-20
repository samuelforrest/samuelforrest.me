import Image from "next/image";

export default function Hero() {
    return(
        <div>
            <div className="flex items-center gap-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m Samuel Forrest
                </h1>
                <Image
                    src="/samuel-forrest-april-2025.webp"
                    alt="Samuel Forrest"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                />
            </div>
            <p className="pt-10 md:text-xl">An aspiring <b>Software Engineer</b> and Entrepreneur, studying Maths, Physics, Computer Science, and EPQ at A Level. <b>Private Tutor & Web Developer.</b> Applying to Degree Apprenticeships & University.</p>
        </div>
    )
}