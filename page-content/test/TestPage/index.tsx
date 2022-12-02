import { Container } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import {
	GENERIC_DESCRIPTION,
	GENERIC_IMAGE,
	GENERIC_TITLE,
	Routes
} from '../../../constants';
import { PageMeta } from '../../../types/next';
import { getPageMeta } from '../../../utils/getPageMeta';

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
				url: Routes.Test,
				image
			})
		}
	};
};

export const TestPage = () => {
	return (
		<Container>
			<div>Test page</div>
			<Link href="/">back home</Link>
		</Container>
	);
};
