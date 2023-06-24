import Hero from "./components/Hero";
import KnowMore from "./components/KnowMore";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import WhyUs from "./components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <WhyUs />
      <img
        src="/images/highlights.png"
        alt="why we work well"
        className="p-page mobile:hidden"
        draggable={false}
      />
      <KnowMore />
    </>
  );
}
