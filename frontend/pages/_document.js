import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/svg+xml"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link
          rel="alternate"
          hrefLang="en-us"
          href="https://www.aspiresoftserv.com"
        />
        <meta
          name="google-site-verification"
          content="cmjNjcEtbUaSOYvEGEJFWGaLCAjBwFMyeQkUjp73wWI"
        />
        <meta name="yandex-verification" content="998fe258ef58e1bd" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
