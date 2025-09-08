import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import React from "react";
import { PortableText } from "@portabletext/react";

const STORY_QUERY = `*[_type == "newsStory" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  body
}`;

const StoryPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params; // ✅ await params before using

  const story: SanityDocument | null = await client.fetch(
    STORY_QUERY,
    { slug },
    { next: { revalidate: 30 } }
  );

  if (!story) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p>Story not found.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12 bg-secondary">
      <div className="container max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{story.title}</h1>

        {/* Published Date */}
        <time className="block text-sm text-gray-500 mb-8">
          {new Date(story.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        {/* Body */}
        <article className="prose prose-lg md:prose-xl max-w-none">
          <PortableText value={story.body} />
        </article>
      </div>
    </section>
  );
};

export default StoryPage;
