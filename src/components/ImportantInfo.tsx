import Link from "next/link";
import React from "react";

const importantLinks = [
  { title: "About Us", href: "/about" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },

];

const openingTimes = [
  { day: "Monday", hours: "09:00 - 16:00" },
  { day: "Tuesday", hours: "09:00 - 16:00" },
  { day: "Wednesday", hours: "09:00 - 16:00" },
  { day: "Thursday", hours: "09:00 - 16:00" },
  { day: "Friday", hours: "09:00 - 16:00" },
  { day: "Saturday - Sunday", hours: "closed" },
];

const contactInfo = [
  {
    title: "Address",
    details:
      "The Parish Offices, Cordell Road, Long Melford, Suffolk, CO10 9HZ",
  },
  {
    title: "Phone",
    details: "01787 378030",
  },
  {
    title: "Email",
    details: "info@longmelford.com",
  },
];

const ImportantInfo = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Important Information</h2>
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="bg-white p-8 shadow flex-1">
            <h3 className="font-bold">Important Pages</h3>
            <div className="flex flex-col gap-2">
              {importantLinks.map((link) => (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 shadow flex-1">
            <h3 className="font-bold">Opening Times</h3>
            <div className="flex flex-col gap-2">
              {openingTimes.map((time) => (
                <div key={time.day}>
                  <strong>{time.day}:</strong> {time.hours}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 shadow flex-1">
            <h3 className="font-bold">Contact Us</h3>
            <div className="flex flex-col gap-2">
              {contactInfo.map((info) => (
                <div key={info.title}>
                  <strong>{info.title}:</strong> {info.details}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
