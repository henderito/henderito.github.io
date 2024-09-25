import React from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getNewsInfoById } from "@/helpers/getNewsInfoById";
import { getRelatedPostInfoById } from "@/helpers/getRelatedPostInfoById";
import fs from 'fs'
import { NewsContainer } from "@/components/News";
import { INews } from "@/global/newsData";
import {unstable_setRequestLocale} from 'next-intl/server';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return [{ id: 'anio-inclusion' }]
}

export default function NewsPage({ params: { id, locale } }: { params: { id: keyof INews, locale: string  }}) {
  unstable_setRequestLocale(locale);

  const data = getNewsInfoById(id);
  const relatedPosts = getRelatedPostInfoById(data.relatedIds);

  const imagesPath = fs.readdirSync(`./public/${data.images}`).map((item) => item );

  return (
    <main>
        <Header />
        <NewsContainer 
          id={id} 
          data={data} 
          related={relatedPosts} 
          imagesPath={imagesPath} 
        />
        <Footer />
    </main>
  );
}
