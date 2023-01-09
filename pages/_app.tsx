import { NoSsr } from '@mui/base';
import { Box } from '@mui/material';
import { Header } from '../components/Header';
import { AppProps as NextAppProps } from 'next/app';
import { HeaderTags } from '../components/HeaderTags';
import { useEffect, useState } from 'react';
import Head from 'next/head';

interface AppProps extends NextAppProps {
	Component: any;
}

interface BodyProps {
	pageProps: AppProps['pageProps'];
	Component: AppProps['Component'];
	initialized: boolean;
}

const Body = ({ Component, pageProps, initialized }: BodyProps) => {
	return (
		<>
			<header>
				<Header />
			</header>

			<Box component="main">
				<NoSsr>
					<Component initialized={initialized} {...pageProps} />
				</NoSsr>
			</Box>
		</>
	);
};

function CustomApp({ Component, pageProps }: AppProps) {
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (global?.window) {
			setInitialized(true);
		}
	}, []);

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
			</Head>

			<HeaderTags meta={pageProps?.meta} />
			<Body
				pageProps={pageProps}
				Component={Component}
				initialized={initialized}
			/>
		</>
	);
}

export default CustomApp;
