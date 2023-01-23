import Script from 'next/script';
import Head from 'next/head';

export const GoogleTags = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>

      <Script
        async
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-HX46CMG58E"
        id="google-tag-manager"
      />

      <Script strategy="lazyOnload" id="google-tag-manager-callback">
        {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-HX46CMG58E');`}
      </Script>
    </>
  );
};
