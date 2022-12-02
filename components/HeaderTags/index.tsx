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

			<meta property="og:title" content={title} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content={type} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content={domain} />
			<meta property="twitter:url" content={url} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Head>
	);
};
