import { GalleryComplete } from "@/components/GalleryFull";
import { Header } from "@/components/Header";
import React from "react";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Page({
  params: { locale }
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <Header hasBackground />
      <GalleryComplete />
    </main>
  );
}
