import { Box, BoxProps, Container, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { Txt } from '../../../../components/Txt';
import {
  breakpoints,
  colors,
  txtProps,
} from '../../../../constants/styleguide';
import { useMobile } from '../../../../utils/useMobile';

export interface HeroBannerProps extends BoxProps {}

export const HeroBanner = ({ ...restProps }: HeroBannerProps) => {
  const imageHeight = {
    xs: 'calc(75vh)',
    sm: 'calc(100vw / 1.5) ',
    md: `calc(max(100vw / 2.25, ${breakpoints.values.md}px / 2.25))`,
    lg: `calc(max(100vw / 2, ${breakpoints.values.lg}px / 2))`,
  };

  const isXs = useMobile('xs');
  const [imageLoaded, setImageLoaded] = useState(false);
  const onLoad = () => setImageLoaded(true);

  return (
    <Box {...restProps}>
      <Box width="100%" height={imageHeight} position="relative">
        {!imageLoaded && (
          <Skeleton width="100%" height="100%" variant="rectangular" />
        )}
        <Image
          src={isXs ? '/img/splash.webp' : '/img/splash2.webp'}
          alt="splash-image"
          fill
          onLoad={onLoad}
          objectFit="cover"
        />
        {imageLoaded && (
          <Box position="absolute" width="100%" top={'calc(50% - 60px)'}>
            <Container>
              <Box display="flex" justifyContent="center">
                <Txt
                  {...txtProps.title}
                  color={colors.White}
                  maxWidth="450px"
                  textAlign="center"
                >
                  Accelerating private sector investments into a net-zero future
                </Txt>
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    </Box>
  );
};
