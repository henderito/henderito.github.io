'use client'

import React from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NewsTile } from "@/components/NewsTile";
import { Text } from "@/components/Text";
import { ASSET_BACKGROUND_UNICORN, ASSET_UNICORNS_3D_UNICORN, ASSET_UNICORNS_CONTACT_UNICORN, ASSET_UNICORNS_WEDO_UNICORN } from "@/global/constants";
import { COLORS, HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme";
import { useTranslations } from "next-intl";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;
  min-height: 100vh;
  background-color: ${COLORS.gray};
`

const TitleContainer = styled.div`
  padding: 2rem 0;
`

export const NewsContainer= () => {
  const t = useTranslations('News');

  return (
    <main>
      <Header />
      <StyledPageContainer>
        <TitleContainer>
          <Text label={t('Title')} size="3xl" variant="alternatePink" />
        </TitleContainer>
        <NewsTile 
          description="As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]"
          newsId="123"
          title="NOTICIA"
          imageUrl={ASSET_BACKGROUND_UNICORN}
        />
        <NewsTile 
          description="As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]"
          newsId="123"
          title="NOTICIA"
          imageUrl={ASSET_UNICORNS_WEDO_UNICORN}
        />
        <NewsTile 
          description="As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]"
          newsId="123"
          title="NOTICIA"
          imageUrl={ASSET_UNICORNS_CONTACT_UNICORN}
        />
        <NewsTile 
          description="As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]"
          newsId="123"
          title="NOTICIA"
          imageUrl={ASSET_UNICORNS_3D_UNICORN}
        />
        <NewsTile 
          description="As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]"
          newsId="123"
          title="NOTICIA"
          imageUrl={ASSET_BACKGROUND_UNICORN}
        />
        <NewsTile 
          description="As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]"
          newsId="123"
          title="NOTICIA"
          imageUrl={ASSET_BACKGROUND_UNICORN}
        />
      </StyledPageContainer>
      <Footer />
    </main>
  );
}
