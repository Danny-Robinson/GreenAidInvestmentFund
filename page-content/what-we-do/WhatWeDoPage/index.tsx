import { GetStaticProps } from 'next';
import {
	GENERIC_DESCRIPTION,
	GENERIC_IMAGE,
	GENERIC_TITLE,
	Routes
} from '../../../constants';
import { PageMeta } from '../../../types/next';
import { getPageMeta } from '../../../utils/getPageMeta';
import { Approach } from './Approach';
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
			<Approach />
		</>
	);
};
