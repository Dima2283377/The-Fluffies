import Head from "next/head";
import { useRouter } from "next/router";

const url = "https://the-fluffies.vercel.app";
const author = "Electrum18";
const twitterAuthor = "@TFluffies";

const theme = "#444444";

const image = "/img/announcement.png";

export default function SiteHead({ t }) {
  const router = useRouter();
  const { route, locale } = router;

  const routeFixed = route !== "/" ? route : "";
  const keywords =
    "The Fluffies,My Little Pony,Pony," +
    (locale === "ru"
      ? "Пони,Пони Креатор,Пони Редактор,Май Литл Пони"
      : "Pony Creator,Pony Editor,Online Editor");

  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content={locale} />
      <meta itemProp="language" content={locale} />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      <meta name="keywords" content={keywords} />

      {/*
        Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph
      */}
      <meta name="og:title" content={t.meta.title} />
      <meta name="og:type" content="site" />
      <meta name="og:url" content={url + "/"} />
      <meta name="og:image" content={image} />
      <meta name="og:site_name" content={t.meta.title} />
      <meta name="og:description" content={t.meta.description} />
      <meta name="og:keywords" content={keywords} />
      <meta name="og:locale" content={locale} />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />

      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        color="#ffaa22"
        href="/icons/safari-pinned-tab.svg"
      />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta name="theme-color" content={theme} />

      <link rel="shortcut icon" href="/icons/favicon.ico" />

      <meta name="application-name" content="The Fluffies" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="The Fluffies" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content={theme} />
      <meta name="msapplication-tap-highlight" content="no" />

      {/*
        Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site.
      */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterAuthor} />
      <meta name="twitter:creator" content={twitterAuthor} />
      <meta name="twitter:image" content={image} />

      {/* Internationalization Meta Tags */}
      <link rel="alternate" hrefLang="ru" href={url + "/ru" + routeFixed} />
      <link rel="alternate" hrefLang="en" href={url + route} />
      <link rel="alternate" hrefLang="x-default" href={url + route} />

      <link
        rel="cannonical"
        href={url + (locale === "ru" ? "/ru" : "") + routeFixed}
      />
    </Head>
  );
}
