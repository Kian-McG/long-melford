import AMDOverview from "@/components/AMDOverview";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import HeroAbout from "@/components/HeroAbout";
import ImportantInfo from "@/components/ImportantInfo";
import NewsStories from "@/components/NewsStories";
import Services from "@/components/Services";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

const HERO_QUERY = `*[_type == "heroCarousel"]{
  image { asset->{url} }
}`;

const TICKER_QUERY = `*[_type == "tickers"]{_id,title}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const data = await client.fetch(
    HERO_QUERY,
    {},
    { next: { revalidate: 30 } }
    // { cache: 'no-store' }
  );
  const images = data.map((img: any) => img.image.asset.url);
  const newsItems = await client.fetch<SanityDocument[]>(
    TICKER_QUERY,
    {},
    options
  );
  return (
    <section className="">
      <Carousel newsItems={newsItems} />
      <Hero images={images} />
      <ImportantInfo/>
      <NewsStories />
      {/* <HeroAbout /> */}
      <Services />
      <AMDOverview />
      {/* <div className="h-[80vh] bg-purple-200">other</div> */}
    </section>
  );
}
