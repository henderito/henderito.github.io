import React from "react";
import { GalleryGrid } from "@/components/Gallery";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Gallery({
  params: { locale }
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <GalleryGrid />
    </main>
  );
}
