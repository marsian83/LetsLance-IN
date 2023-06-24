import MaterialIcon from "../../../common/MaterialIcon";

const services = [
  {
    title: "Custom Software Development Services",
    description:
      "We offer customized software solutions for small to large organizations covering all their requirements for powerful software solutions.",
    icon: "eb8e",
    color: "#F48FB1",
  },
  {
    title: "Mobile App Development Services",
    description:
      "In a highly competitive era, we update ourselves with advanced technologies to deliver robust and competitive mobile applications.",
    icon: "e325",
    color: "#66BB6A",
  },
  {
    title: "eCommerce Development Services",
    description:
      "Flexibility, security, and quality are elements we focus on while providing eCommerce services across diverse industries.",
    icon: "e8cc",
    color: "#29B6F6",
  },
  {
    title: "Website Development Services",
    description:
      "For robust web applications, you need experienced web developers. We have a team of skilled resources who will help you develop an efficient website.",
    icon: "e894",
    color: "#ad92aa",
  },
];

export default function Services() {
  return (
    <section className="p-page bg-foreground bg-opacity-70 py-16">
      <div className="flex flex-col gap-y-5 text-center mobile:gap-y-2">
        <h1 className="text-5xl font-semibold mobile:text-3xl">
          Services we offer
        </h1>
        <p className="text-lg mobile:text-base">
          We offer variety of software and web development services as per the
          requirement of client.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap justify-evenly gap-y-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="group flex w-[46%] cursor-default flex-col gap-y-5 rounded-lg border bg-background p-8 mobile:w-full"
            style={{ borderColor: service.color }}
          >
            <div className="flex items-center gap-x-5">
              <MaterialIcon
                codepoint={service.icon}
                className="rounded-md p-2 text-5xl text-white duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                style={{ backgroundColor: service.color }}
              />
              <h2
                className="bg-clip-text text-xl font-semibold duration-300 group-hover:text-transparent"
                style={{ backgroundColor: service.color }}
              >
                {service.title}
              </h2>
            </div>
            <p className="">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
