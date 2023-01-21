import { Box, BoxProps, Container, Grid, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { Txt } from '../../../components/Txt';
import { breakpoints, colors, txtProps } from '../../../constants/styleguide';
import { useMobile } from '../../../utils/useMobile';

export interface HeroBannerProps extends BoxProps {}

export const HeroBanner = ({ ...restProps }: HeroBannerProps) => {
  const imageHeight = {
    xs: 'calc(33vh)',
    sm: 'calc(100vw / 1.5) ',
    md: `calc(max(100vw / 2.25, ${breakpoints.values.md}px / 2.25))`,
    lg: `calc(max(100vw / 2.5, ${breakpoints.values.lg}px / 2.5))`,
    xl: `calc(max(100vw / 4, ${breakpoints.values.xl}px / 4))`,
  };

  const isSm = useMobile('sm');
  const [imageLoaded, setImageLoaded] = useState(false);
  const onLoad = () => setImageLoaded(true);

  const text = (
    <>
      <Txt {...txtProps.title} color={colors.White}>
        Get Touch
      </Txt>
      <Txt
        {...txtProps.body1}
        color={colors.White}
        mt={2}
        mb={10}
        maxWidth={{ xs: '100%', md: '410px' }}
      >
        You can reach out to us by email or find us on LinkedIn and we will get
        back to you as soon as possible
      </Txt>
    </>
  );

  if (isSm) {
    return (
      <Box bgcolor={colors.Green1} {...restProps}>
        <Grid container>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column" px={10} pt={15}>
              {text}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box width="100%" height={imageHeight} position="relative">
              {!imageLoaded && (
                <Skeleton width="100%" height="100%" variant="rectangular" />
              )}
              <Image
                src="/img/contact-us-splash2.webp"
                alt="splash-image"
                fill
                onLoad={onLoad}
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box {...restProps}>
      <Box width="100%" height={imageHeight} position="relative">
        {!imageLoaded && (
          <Skeleton width="100%" height="100%" variant="rectangular" />
        )}
        <Image
          src="/img/contact-us-splash.webp"
          alt="splash-image"
          fill
          onLoad={onLoad}
          objectFit="cover"
        />
        {imageLoaded && (
          <Box position="absolute" left="0" width="100%">
            <Container>
              <Box
                display="flex"
                pt={{ xs: 0, sm: 10, md: 25 }}
                flexDirection="column"
              >
                {text}
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    </Box>
  );
};
