"use client";
import { motion } from "framer-motion";
import { SanityDocument } from "next-sanity";

export default function NewsTicker({
  newsItems,
}: {
  newsItems: SanityDocument[];
}) {
  // Repeat items *twice* so they can wrap seamlessly
  const repeatedItems = [...newsItems, ...newsItems];

  return (
    <div className="overflow-hidden w-full bg-foreground text-white py-3 h-[var(--ticker-height)]">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-100%"] }} // move entire track by its full width
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        {repeatedItems.map((item, i) => (
          <div key={i} className="mx-8 text-lg font-medium inline-block ">
            {item.title}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
