import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";


export default function Home() {
  return (
    <main className="m-8 sm:m-12 md:m-25 lg:m-45 xl:m-50 2xl:m-100">
      <section>
        <p>Intro</p>
      </section>
        <p>About me</p>
      <section>
        <p>Work Experience</p>
      </section>
      <section>
        <p>Education</p>
      </section>
      <section className="mb-8">
        <Carousel className="relative">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardHeader>
              <CardTitle>Personal Portfolio Website</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/samuelforrestlogo.png" alt="Project 1" width={500} height={500} className="rounded-lg"/>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
            </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardHeader>
              <CardTitle>Personal Portfolio Website</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/samuelforrestlogo.png" alt="Project 1" width={500} height={500} className="rounded-lg"/>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
            </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardHeader>
              <CardTitle>Personal Portfolio Website</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/samuelforrestlogo.png" alt="Project 1" width={500} height={500} className="rounded-lg"/>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
            </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardHeader>
              <CardTitle>Personal Portfolio Website</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/samuelforrestlogo.png" alt="Project 1" width={500} height={500} className="rounded-lg"/>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
            </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </section>

    </main>
  );
}
