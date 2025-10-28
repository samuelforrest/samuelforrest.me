import Image from "next/image";
import ChristmasCountdown from "./ChristmasCountdown";

export default function Hero() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-3">
            Hi, I&apos;m Samuel Forrest
          </h1>
          <ChristmasCountdown />
        </div>
        <Image
          src="/samuel-forrest-october-2025.webp"
          alt="Samuel Forrest"
          width={120}
          height={120}
          priority
          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full object-cover flex-shrink-0 aspect-square"
        />
      </div>
    </div>
  );
}
