import React from "react";
import Image from "next/image";
import { TNewsStory } from "@/sanity/schemaTypes/newsStoryType";

type NewsStoryProps = {
  className: string;
  story: TNewsStory;
  index: number;
  main?: boolean;
};
// title={story.title} content={story.body[0].children[0].text} slug={story.slug}
const NewsStory = ({ story, className, index, main }: NewsStoryProps) => {
  const { title, body, publishedAt } = story;
  console.log(body); // display json pls

  return (
    <div className="h-full flex flex-col ">
      {/* Image Section */}
      <div className={`relative ${className} w-full`}>
        <Image
          src="/stock.jpg"
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Text Section */}
      <h2
        className={`${index === 0 && main ? "text-4xl" : "text-2xl"} uppercase font-bold py-4`}
      >
        {title}
      </h2>

      {/* Content that may overflow */}
      {/* <p className=" overflow-hidden flex-1">{body[0].children[0].text}</p> */}

      {/* Always stays at bottom */}
      <p className=" text-sm text-gray-500 uppercase">
        {publishedAt
          ? new Date(publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "Date not available"}
      </p>
    </div>
  );
};

export default NewsStory;
