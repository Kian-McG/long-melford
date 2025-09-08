import React from "react";
import Image from "next/image";

type NewsStoryProps = {
  className: string;
  story: {
    title: string;
    body: { children: { text: string }[] }[];
    slug: { current: string };
    publishedAt: string;
  };
  index: number;
};
// title={story.title} content={story.body[0].children[0].text} slug={story.slug}
const NewsStory = ({ story, className, index }: NewsStoryProps) => {
  const { title, body, publishedAt } = story;
  return (
    <div className="h-full flex flex-col hover:scale-99 transition-all">
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
        className={`${index === 0 ? "text-4xl" : "text-2xl"} uppercase font-bold py-4`}
      >
        {title}
      </h2>

      {/* Content that may overflow */}
      {/* <p className=" overflow-hidden flex-1">{body[0].children[0].text}</p> */}

      {/* Always stays at bottom */}
      <p className=" text-sm text-gray-500 uppercase">
        {new Date(publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default NewsStory;
