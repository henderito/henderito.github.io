import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from "next/headers";
 
// Can be imported from a shared config
const locales = ['es', 'en', 'it', 'fr', 'pt'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // const headersList = headers();
  // const defaultLocale = headersList.get("accept-language");
  // const defaultBrowserLocale = cookies().get("NEXT_LOCALE")?.value || defaultLocale || "es";
  // const defaultBrowserLocale = cookies().get("NEXT_LOCALE")?.value || "es";
 
  return {
    // locale: defaultBrowserLocale,
    locale: 'es',
    messages: (await import(`../messages/${locale}.json`)).default
  };
});