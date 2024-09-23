import React from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getNewsInfoById } from "@/helpers/getNewsInfoById";
import { getRelatedPostInfoById } from "@/helpers/getRelatedPostInfoById";
import fs from 'fs'
import { NewsContainer } from "@/components/News";
import { INews } from "@/global/newsData";



export default function NewsPage({ params: { id } }: { params: { id: keyof INews }}) {
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
