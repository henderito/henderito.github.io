import React from "react";
import { COLORS, HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme";
import styled from "styled-components";
import {unstable_setRequestLocale} from 'next-intl/server';
import { NewsContainer } from "@/components/NovedadesContainer";

export default function News({ params: { locale }}: Readonly<{ params: { locale: string }; }>) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <NewsContainer />
    </main>
  );
}
