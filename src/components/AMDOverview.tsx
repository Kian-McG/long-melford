"use client";

import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";

const AMDs = [
  {
    _id: "1",
    title: "test",
  },
  {
    _id: "2",
    title: "test",
  },
  {
    _id: "3",
    title: "test",
  },
  {
    _id: "4",
    title: "test",
  },
];

const AMDS_QUERY = `*[_type == "AMDs"] | order(date desc)[0...5]{_id, title, "fileUrl": file.asset->{url}}`;
const options = { next: { revalidate: 30 } };
import { useEffect, useState } from "react";

const AMDOverview = () => {
  const [amds, setAmds] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchAmds = async () => {
      const data = await client.fetch<SanityDocument[]>(
        AMDS_QUERY,
        {},
        options
      );
      setAmds(data);
    };
    fetchAmds();
  }, []);

  return (
    <section className="py-20 bg-background h-[90vh]">
      <h2 className="text-4xl font-bold text-center">
        Agendas, Minutes & Reports
      </h2>
      <div className="grid grid-cols-3 gap-4 container h-full py-10">
        {amds.map((amd) => (
          <a
            key={amd._id}
            href={amd.fileUrl ? amd.fileUrl.url : ""}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 border-b bg-secondary hover:bg-muted/90 hover:scale-99 transition"
          >
            <h2 className="text-xl md:text-2xl font-bold pb-2 underlin">
              {amd.title}
            </h2>
            {/* <p className="text-sm md:text-md text-muted-foreground">{amd.desc}</p> */}
          </a>
        ))}
        <Link
          href={"/agendas"}
          className="p-8 border-b bg-secondary hover:bg-muted/90 hover:scale-99 transition flex items-center justify-center"
        >
          <h2 className="text-xl md:text-2xl font-bold pb-2 underlin">
            + View more
          </h2>
          {/* <p className="text-sm md:text-md text-muted-foreground">{amd.desc}</p> */}
        </Link>
      </div>
    </section>
  );
};

export default AMDOverview;
