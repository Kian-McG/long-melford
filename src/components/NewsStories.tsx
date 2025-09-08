import React from "react";
import NewsStory from "./NewsStory";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import {  ArrowRight } from "lucide-react";

// const stories = [
//   {
//     id: 1,
//     title: "News Story 1",
//     content: "Content for news story 1",
//     slug: "news-story-1",
//   },
//   {
//     id: 2,
//     title: "News Story 2",
//     content: "Content for news story 2",
//     slug: "news-story-2",
//   },
//   {
//     id: 3,
//     title: "News Story 3",
//     content: "Content for news story 3",
//     slug: "news-story-3",
//   },
//   {
//     id: 4,
//     title: "News Story 4",
//     content: "Content for news story 4",
//     slug: "news-story-4",
//   },
//   //   {
//   //     id: 5,
//   //     title: "News Story 5",
//   //     content: "Content for news story 5",
//   //     slug: "news-story-5",
//   //   },
//   //   {
//   //     id: 6,
//   //     title: "News Story 6",
//   //     content: "Content for news story 6",
//   //     slug: "news-story-6",
//   //   },
// ];

const NEWS_QUERY = `*[
  _type == "newsStory"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body}`;

const options = { next: { revalidate: 30 } };

const stories = await client.fetch<SanityDocument[]>(NEWS_QUERY, {}, options);
const NewsStories = () => {
  return (
    <section className="my-20 bg-white h-screen">
      <div className="container md:text-5xl text-3xl pb-8 font-bold">
        <Link
          href="/news"
          className="flex items-center gap-1 hover:gap-9 transition-all duration-300"
        >
          {" "}
          <h2>News Stories</h2> <ArrowRight size={50} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container h-full pb-10">
        {stories.map((story, index) => (
          <div
            key={story._id}
            className={index === 0 ? "md:col-span-2 row-span-2 md:mr-10" : ""}
          >
            <Link href={`/news/${story.slug.current}`}>
              <NewsStory
                story={story}
                className={index === 0 ? `h-[70%]` : `h-[60%]`}
                index={index}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsStories;
