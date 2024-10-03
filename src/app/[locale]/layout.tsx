import type { Metadata } from "next";
import { GlobalStyles } from "@/global";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '../../i18n'
import StyledComponentsRegistry from "@/components/ComponentRegistrty/register";
import localFont from 'next/font/local'
import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata: Metadata = {
  title: "Uniqueer",
  description: "Uniqueer"
};

const locales = ['en', 'es', 'fr', 'it', 'pt'];

const gotham = localFont({ src: './gotham.woff2'})
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale || 'es'} className={gotham.className}>
        <body>
          <StyledComponentsRegistry>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
            <GlobalStyles />
          </StyledComponentsRegistry>
        </body>
    </html>
  );
};
