"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCarousel } from "@/lib/hooks/hooks";

const Hero = ({ images }: { images: string[] }) => {
  const currentImage = useCarousel({
    totalImages: images.length,
    interval: 5000,
  });
  return (
    <section className="h-[calc(100vh-var(--header-height)-var(--ticker-height))] text-white font-bold flex md:flex-row flex-col">
      {/* <div className="h-full absolute inset-0 w-full z-10 bg-gradient-to-br from-primary from-20% to-transparent"></div>
      <div className="bg-[url('/hero-banner.jpg')] h-full w-full z-0 bg-cover bg-center absolute inset-0"></div>
      <div className="container w-full h-full absolute inset-0">
         <h1 className="text-8xl z-20 absolute inset-0 flex items-center ">
        Long Melford, Whew!!!!
      </h1>

      </div> */}
      <div className="bg-primary flex-1 h-full md:text-8xl text-4xl flex flex-col justify-center uppercase gap-10 border-r-4">
        <p className="md:px-20 px-10 tracking-tight font-extrabold">
          Long Melford, Let&apos;s Go!!!!
        </p>
        <div className="flex md:gap-10 ga md:px-20 px-10 flex-wrap">
          <Button className="hover:cursor-pointer">
            <Link
              href="/news"
              className="flex items-center gap-4 hover:gap-10 transition-all border-b-1"
            >
              Latest News <ArrowRight />
            </Link>
          </Button>
          <Button className="hover:cursor-pointer">
            <Link
              href="/agendas"
              className="flex items-center gap-4 hover:gap-10 transition-all border-b-1"
            >
              Upcoming Meetings <ArrowRight />
            </Link>
          </Button>
          <Button className="hover:cursor-pointer">
            <Link
              href="/contact"
              className="flex items-center gap-4 hover:gap-10 transition-all border-b-1"
            >
              Contact <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 h-full relative">
        {images.map((src, index) => (
          <Image
            key={`${src}-${index}`} // ensure React sees this as a unique element every time
            src={src}
            alt="Hero Banner"
            fill
            priority={index === currentImage} // first image loads eagerly
            className={`object-cover object-center transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
