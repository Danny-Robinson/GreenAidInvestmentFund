import React from 'react';
import Head from 'next/head';
import { PageMeta } from '../../types/next';

export interface HeaderTagsProps {
  meta?: PageMeta;
}

export const HeaderTags = ({ meta }: HeaderTagsProps) => {
  if (!meta) {
    return null;
  }

  const { title, description, url, image, domain, type } = meta;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta name="image" property="og:image" content={`${domain}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}${image}`} /> */}

      <meta property="og:url" content="https://www.greenaid.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Green Aid Investment Fund" />
      <meta
        property="og:description"
        content="Green Aid is an investment fund focused on accelerating private sector investments into high-impact nature-based solutions globally."
      />
      <meta
        property="og:image"
        content="https://www.greenaid.com/img/splash.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="greenaid.com" />
      <meta property="twitter:url" content="https://www.greenaid.com" />
      <meta name="twitter:title" content="Green Aid Investment Fund" />
      <meta
        name="twitter:description"
        content="Green Aid is an investment fund focused on accelerating private sector investments into high-impact nature-based solutions globally."
      />
      <meta
        name="twitter:image"
        content="https://www.greenaid.com/img/splash.png"
      />

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="167x167"
        href="/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="/favicon.ico"
      />
    </Head>
  );
};
