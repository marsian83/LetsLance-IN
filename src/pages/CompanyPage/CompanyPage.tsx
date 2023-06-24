import Hero from "./components/Hero";

export default function CompanyPage() {
  return (
    <>
      <div className="my-40" />
      <Hero />

      <article className="py-8">
        <div className="p-page py-8">
          <section className="mb-12">
            <h2 className="mb-4 font-poppins text-3xl font-bold text-front md:text-4xl">
              About Us
            </h2>
            <p className="text-lg text-front md:text-xl mobile:text-base">
              We are a company driven by a passion for delivering cutting-edge
              solutions that help businesses thrive in the digital landscape. At
              LetsLanceHK, we believe that innovation and excellence go hand in
              hand. Our team of highly skilled professionals brings together
              expertise from various domains, creating a dynamic and versatile
              workforce. With a keen eye for detail and a commitment to staying
              ahead of industry trends, we ensure that our clients receive the
              most innovative and effective solutions tailored to their unique
              needs.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="mb-4 font-poppins text-2xl font-bold text-front md:text-3xl">
              Our Mission
            </h3>
            <p className="text-lg text-front md:text-xl mobile:text-base">
              Our mission is to empower businesses by leveraging technology. We
              strive to understand our clients' goals and challenges to create
              custom solutions that drive their success. With a focus on
              quality, collaboration, and client satisfaction, we aim to exceed
              expectations at every step of the journey.
            </p>
          </section>

          <section className="widescreen:mb-12">
            <h3 className="mb-4 font-poppins text-2xl font-bold text-front md:text-3xl">
              Our Values
            </h3>
            <ul className="list-inside list-disc text-sm text-front md:text-xl mobile:flex mobile:flex-col mobile:gap-y-2 widescreen:whitespace-nowrap">
              <li>
                Client-Centric Approach: We prioritize our clients' needs and
                work closely with them to deliver tailored solutions.
              </li>
              <li>
                Innovation and Creativity: We embrace innovation and creativity
                to develop cutting-edge solutions for our clients.
              </li>
              <li>
                Integrity and Transparency: We maintain honesty, integrity, and
                transparency in all our interactions and processes.
              </li>
              <li>
                Collaboration and Communication: We foster a collaborative
                environment, valuing open communication and teamwork.
              </li>
              <li>
                Continuous Learning and Growth: We continuously enhance our
                skills and stay updated with the latest industry trends.
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
