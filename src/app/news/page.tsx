import NewsStory from "@/components/NewsStory";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";

const NEWS_QUERY = `*[
  _type == "newsStory"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body}`;

const options = { next: { revalidate: 30 } };

const stories = await client.fetch<SanityDocument[]>(NEWS_QUERY, {}, options);

const NewsPage = () => {
  return (
    <section className="min-h-screen bg-secondary">
      <div className="container py-20">
        <div className="grid grid-cols-3 h-full w-full gap-8">
          {stories.map((story, index) => (
            <div
              key={story._id}
              // className={index === 0 ? "md:col-span-2 row-span-2 mr-10" : ""}
            >
              <Link href={`/news/${story.slug.current}`}>
                <NewsStory
                  story={story}
                  className={`h-[250px]`}
                  index={index}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
