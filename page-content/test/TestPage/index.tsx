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
			<Txt {...txtProps.title}>title</Txt>
			<Txt {...txtProps.headline1}>headline1</Txt>
			<Txt {...txtProps.headline2}>headline2</Txt>
			<Txt {...txtProps.body1}>body1</Txt>
			<Txt {...txtProps.body2}>body2</Txt>
			<Txt {...txtProps.body3}>body3</Txt>
			<Box width="20px" height="20px" bgcolor={colors.Black} />
			<Box width="20px" height="20px" bgcolor={colors.Green1} />
			<Box width="20px" height="20px" bgcolor={colors.Green2} />
			<Box width="20px" height="20px" bgcolor={colors.Green3} />
			<Box width="20px" height="20px" bgcolor={colors.Green4} />
			<Box width="20px" height="20px" bgcolor={colors.White} />
			<LogoSymbol variant="dark" />
			<Box bgcolor={'black'}>
				<LogoSymbol variant="light" />
			</Box>
			<LogoSymbol variant="green" />
			<LogoTxt variant="dark" />
			<Box bgcolor={'black'}>
				<LogoTxt variant="light" />
			</Box>
			<Button variant="contained">Primary</Button>
			<Box width="20px" height="20px" bgcolor={colors.Black} />
			<Box width="20px" height="20px" bgcolor={colors.Green1} />
			<Box width="20px" height="20px" bgcolor={colors.Green2} />
			<Box width="20px" height="20px" bgcolor={colors.Green3} />
			<Box width="20px" height="20px" bgcolor={colors.Green4} />
			<Box width="20px" height="20px" bgcolor={colors.White} />
			<Box width="20px" height="20px" bgcolor={colors.Black} />
			<Box width="20px" height="20px" bgcolor={colors.Green1} />
			<Box width="20px" height="20px" bgcolor={colors.Green2} />
			<Box width="20px" height="20px" bgcolor={colors.Green3} />
			<Box width="20px" height="20px" bgcolor={colors.Green4} />
			<Box width="20px" height="20px" bgcolor={colors.White} />
			<Box width="20px" height="20px" bgcolor={colors.Black} />
			<Box width="20px" height="20px" bgcolor={colors.Green1} />
			<Box width="20px" height="20px" bgcolor={colors.Green2} />
			<Box width="20px" height="20px" bgcolor={colors.Green3} />
			<Box width="20px" height="20px" bgcolor={colors.Green4} />
			<Box width="20px" height="20px" bgcolor={colors.White} />
			<Box width="20px" height="20px" bgcolor={colors.Black} />
			<Box width="20px" height="20px" bgcolor={colors.Green1} />
			<Box width="20px" height="20px" bgcolor={colors.Green2} />
			<Box width="20px" height="20px" bgcolor={colors.Green3} />
			<Box width="20px" height="20px" bgcolor={colors.Green4} />
			<Box width="20px" height="20px" bgcolor={colors.White} />
		</Container>
	);
};
