export default function Hero() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden mobile:mt-32 mobile:flex mobile:h-auto mobile:flex-col-reverse">
      <video
        src="/videos/contact-us.mp4"
        className="absolute bottom-0 right-0 -z-1 translate-x-9 scale-125 mobile:static mobile:translate-x-0 mobile:scale-105"
        autoPlay
        muted
        loop
      />

      <div className="p-page relative flex h-full w-3/5 flex-col justify-center gap-y-5 mobile:h-auto mobile:w-full mobile:gap-y-3">
        <h1 className="text-5xl font-semibold mobile:text-3xl">
          Let's Get in touch
        </h1>
        <h2 className="text-3xl tracking-wide mobile:text-sm widescreen:whitespace-nowrap">
          Do you have any queries? We're here to talk!
        </h2>
        <p className="mobile:text-sm">
          <br />
          Have a question, a project idea, or simply want to learn more about
          our services? Don't hesitate to get in touch with us. At LetsLanceHK,
          we value open communication and are here to provide you with the
          information and assistance you need.
          <br />
          <br />
          Our team of experts is ready to guide you through the process,
          understand your requirements, and offer tailored solutions that align
          with your business goals. We believe in building strong and lasting
          partnerships, and your satisfaction is our top priority.
        </p>

        <h3
          className="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2 cursor-default whitespace-nowrap rounded-md border border-primary bg-primary bg-opacity-10 
        px-10 py-2 text-xl text-primary selection:hidden mobile:static mobile:mt-3 mobile:translate-x-0 mobile:p-2 mobile:text-base"
        >
          Don't forget to Claim your{" "}
          <span className="text-2xl font-bold mobile:text-lg">Free</span>{" "}
          Quotation!
        </h3>
      </div>
    </section>
  );
}
