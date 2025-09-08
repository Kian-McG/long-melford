import NewsStory from "@/components/NewsStory";
import { client } from "@/sanity/lib/client";
import { TNewsStory } from "@/sanity/schemaTypes/newsStoryType";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";

const NEWS_QUERY = `*[
  _type == "newsStory"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body}`;

const options = { next: { revalidate: 30 } };

const stories = await client.fetch<TNewsStory[]>(NEWS_QUERY, {}, options);

const NewsPage = () => {
  return (
    <section className="min-h-screen bg-secondary">
      <div className="container py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest News</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay up to date with the latest stories and announcements.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story._id}
              className="group  overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-1 bg-background p-8 rounded-xl"
            >
              <Link href={`/news/${story.slug.current}`}>
                <NewsStory
                  story={story}
                  className="h-[250px] w-full"
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
