import { Box, BoxProps, Container } from '@mui/material';
import Image from 'next/image';
import { Txt } from '../../../../components/Txt';
import {
  breakpoints,
  colors,
  txtProps,
} from '../../../../constants/styleguide';
import { useMobile } from '../../../../utils/useMobile';

export interface HeroBannerProps extends BoxProps {}

export const HeroBanner = ({ ...restProps }: HeroBannerProps) => {
  const isXs = useMobile('xs');

  return (
    <Box bgcolor={colors.White} pt={30} pb={20} {...restProps}>
      <Container>
        <Box display="flex" justifyContent="center" textAlign="center">
          <Box maxWidth={600}>
            <Txt
              color={colors.Green1}
              display="inline"
              {...txtProps.title}
              component="h1"
            >
              <Txt color={colors.Green2} display="inline" {...txtProps.title}>
                Green Aid
              </Txt>{' '}
              invests in direct carbon avoidance and removal projects to deliver
              strong climate impact results
            </Txt>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
