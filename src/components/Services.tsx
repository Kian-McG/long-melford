import { desc } from "framer-motion/client";
import { url } from "inspector";
import Link from "next/link";
import React from "react";

const services = [
  {
    _id: "1",
    title: "Agendas, Meetings & Minutes",
    desc: "See how we can help you with agendas, meetings, and minutes.",
    url: "/services/agendas",
  },
  {
    _id: "2",
    title: "Your Councilors",
    desc: "Meet your councilors and learn about their roles.",
    url: "/services/councilors",
  },
  {
    _id: "3",
    title: "Annual Reports",
    desc: "Access our annual reports and financial statements.",
    url: "/services/annual-reports",
  },
  {
    _id: "4",
    title: "Community Engagement",
    desc: "Learn about our community engagement initiatives.",
    url: "/services/community-engagement",
  },
  {
    _id: "5",
    title: "Policy Development",
    desc: "Assistance with policy development and implementation.",
    url: "/services/policy-development",
  },
  {
    _id: "6",
    title: "Legal Services",
    desc: "Support with legal matters and compliance.",
    url: "/services/legal",
  },
  {
    _id: "7",
    title: "New Service",
    desc: "Description of the new service.",
    url: "/services/new-service",
  },
];

const Services = () => {
  return (
    <section className="bg-primary" id="services">
      <div className="container py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-background pb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service) => (
            <Link
              key={service._id}
              href={service.url}
              className="p-8 border-b bg-secondary hover:bg-muted/90 hover:scale-99 transition"
            >
              <h2 className="text-xl md:text-2xl font-bold pb-2 underlin">
                {service.title}
              </h2>
              <p className="text-sm md:text-md text-muted-foreground">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
