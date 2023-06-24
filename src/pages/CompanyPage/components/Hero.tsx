import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="mb-4 font-poppins text-4xl font-bold text-front md:text-6xl mobile:text-center">
        Welcome to LetsLanceHK
      </h1>
      <p className="text-center text-lg text-front md:text-xl mobile:text-base">
        Your premier destination for top-notch tech outsourcing, website
        development, app development, and more.
      </p>
      <Link
        to="/contact"
        className="mt-8 rounded-full bg-primary px-6 py-2 font-poppins text-lg font-bold text-background transition duration-300 hover:bg-secondary mobile:text-base mobile:font-medium"
      >
        Get Started
      </Link>
      <div className="p-page flex items-end mobile:flex-col">
        <video
          src="/videos/meeting.mp4"
          className="w-1/2 mobile:w-full"
          autoPlay
          muted
          loop
        />{" "}
        <video
          src="/videos/discussion.mp4"
          className="w-1/2 mobile:hidden"
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  );
}
