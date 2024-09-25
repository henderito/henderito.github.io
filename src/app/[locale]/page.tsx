import React from 'react'
import { Header } from "@/components/Header";
import { CompaniesSection } from '@/components/Sections/Companies';
import { StartSection } from '@/components/Sections/Start';
import { MemberSection } from '@/components/Sections/Members';
import { ContactPage } from '@/components/Sections/Contact';
import { Footer } from '@/components/Footer';
import { TeamSection } from '@/components/Sections/Team';
import { unstable_setRequestLocale } from 'next-intl/server';
// import { getTranslations } from 'next-intl/server';

// export async function generateMetadata({params: {locale}}: { params: { locale: string}}) {
//   const t = await getTranslations({locale, namespace: 'Metadata'});
 
//   return {
//     title: t('title')
//   };
// }

export default function Home({
  params: { locale }
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <Header />
      <StartSection />
      <CompaniesSection />
      <MemberSection />
      <TeamSection />
      <ContactPage />
      <Footer />
    </main>
  );
}
 
// Para el feedback pedir que cantidad de caracteres y demas en los textos que hay que revisar

// Agregar el linkedin de cada uno (o alguna red) en el chip de cada persona del equipo

// Que el formulario de contacto mande un mail a hola@uniqueer.org y agregue a una bd