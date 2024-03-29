import { NoSsr } from '@mui/base';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Header } from '../components/Header';
import { AppProps as NextAppProps } from 'next/app';
import { HeaderTags } from '../components/HeaderTags';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import './index.css';
import { GoogleTags } from '../components/GoogleTag';

interface AppProps extends NextAppProps {
  Component: any;
}

interface BodyProps {
  pageProps: AppProps['pageProps'];
  Component: AppProps['Component'];
  initialized: boolean;
}

const theme = createTheme({
  typography: {
    fontFamily: ['futura-pt', 'sans-serif'].join(','),
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          fontFamily: ['futura-pt', 'sans-serif'].join(','),
        },
      },
    },
  },
});

const Body = ({ Component, pageProps, initialized }: BodyProps) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <Box component="main">
        <NoSsr>
          <ThemeProvider theme={theme}>
            <Component initialized={initialized} {...pageProps} />
          </ThemeProvider>

          <footer>
            <Footer />
          </footer>
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeaderTags meta={pageProps?.meta} />
      {/* <GoogleTags /> */}
      <Body
        pageProps={pageProps}
        Component={Component}
        initialized={initialized}
      />
    </>
  );
}

export default CustomApp;
