import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import React from "react";

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
    <section className="min-h-screen py-8 bg-secondary">
      <div className="container ">
        <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
        <time className="block text-sm text-gray-500 mb-6">
          {new Date(story.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
       <div>
        {story.body[0].children.map((block: { text: string }, index: number) => (
          <p key={index} className="mb-4">{block.text}</p>
        ))}
       </div>

      </div>
    </section>
  );
};

export default StoryPage;
