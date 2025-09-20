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
        </div>
    )
}