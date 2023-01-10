import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Button } from '../../../components/Button';
import { LogoSymbol } from '../../../components/Icons/LogoSymbol';
import { LogoTxt } from '../../../components/Icons/LogoTxt';
import { Txt } from '../../../components/Txt';
import {
	GENERIC_DESCRIPTION,
	GENERIC_IMAGE,
	GENERIC_TITLE,
	Routes
} from '../../../constants';
import { colors, txtProps } from '../../../constants/styleguide';
import { PageMeta } from '../../../types/next';
import { getPageMeta } from '../../../utils/getPageMeta';
import { HeroBanner } from './HeroBanner';
import { WhatWeDo } from './WhatWeDo';

export const getStaticProps: GetStaticProps<{
	meta: PageMeta;
}> = async () => {
	const title = GENERIC_TITLE;
	const description = GENERIC_DESCRIPTION;
	const image = GENERIC_IMAGE;

	return {
		props: {
			meta: getPageMeta({
				title,
				description,
				url: Routes.WhatWeDo,
				image
			})
		}
	};
};

export const WhatWeDoPage = () => {
	return (
		<>
			<HeroBanner />
			<WhatWeDo />
		</>
	);
};
