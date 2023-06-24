import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="p-page relative flex h-screen mobile:mt-32 mobile:h-auto mobile:flex-col mobile:overflow-hidden">
      <div className="mb-28 flex basis-2/3 flex-col justify-center gap-y-10 mobile:basis-full mobile:gap-y-6">
        <h1 className="text-5xl font-bold leading-normal mobile:text-3xl mobile:font-semibold">
          We help bring your startup idea to life with Websites & Apps
        </h1>
        <p className="text-2xl font-medium mobile:text-lg mobile:font-normal widescreen:mr-[20%]">
          With flawless quality, we not only build websites and apps but help
          your startup reach new heights.
        </p>
        <Link
          to="/contact"
          className="relative w-max rounded-md border border-primary bg-back bg-opacity-10 px-8 py-3 text-xl text-primary duration-300 before:absolute before:right-full before:top-0
          before:-z-1 before:h-full before:w-0 before:bg-primary before:duration-inherit hover:scale-105 hover:text-background hover:before:right-0 hover:before:w-full"
        >
          Let's Get Started
        </Link>
      </div>
      <div className="basis-1/3">
        <video
          autoPlay
          muted
          loop
          src="/videos/hero-startup.mp4"
          className="absolute bottom-0 right-0 -z-1 mobile:static mobile:scale-125"
        />
      </div>

      <BG />
    </section>
  );
}

function BG() {
  return (
    <div className="absolute left-0 top-0 -z-10 h-full w-full mobile:-rotate-90 mobile:scale-50">
      <div className="absolute left-28 top-40 h-20 w-20 rounded-md bg-primary bg-opacity-10" />
      <div className="absolute bottom-40 left-28 h-24 w-32 rounded-md bg-foreground bg-opacity-10" />
      <div className="absolute left-80 top-56 h-24 w-44 rounded-md bg-foreground bg-opacity-20" />
      {/* <div className="absolute bottom-40 left-72 h-36 w-20 rounded-md bg-primary bg-opacity-10" /> */}
      <div className="absolute left-[25rem] top-20 h-20 w-10 rounded-md bg-back bg-opacity-10" />
      <div className="absolute bottom-52 left-[38rem] h-52 w-32 rounded-md bg-foreground bg-opacity-10" />
      {/* <div className="absolute bottom-10 left-[27rem] h-40 w-32 rounded-md bg-foreground bg-opacity-10" /> */}
      <div className="absolute bottom-16 left-80 h-16 w-32 rounded-md bg-secondary bg-opacity-10" />
      <div className="absolute right-28 top-40 h-24 w-32 rounded-md bg-foreground bg-opacity-10" />
      <div className="absolute right-96 top-32 h-14 w-52 rounded-md bg-back bg-opacity-10" />
    </div>
  );
}
