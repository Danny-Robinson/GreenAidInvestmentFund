import Container from '@mui/material/Container';
import { Box, BoxProps } from '../../../components/Box';
import { colors, txtProps } from '../../../constants/styleguide';
import Image from 'next/image';
import { Txt } from '../../../components/Txt';
import { useState } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { BulletPoint } from '../../../components/Icons/BulletPoint';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 2,
    },
  },
};

export interface FoundersProps extends BoxProps {}

interface FounderProps extends BoxProps {
  name: string;
  bio: string;
  src: string;
  title: string;
}

const Founder = ({ name, bio, src, title, ...restProps }: FounderProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const onLoad = () => setImageLoaded(true);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      {...restProps}
    >
      <Box width="200px" height="270px" position="relative" mb={6}>
        {!imageLoaded && (
          <Box
            component={Skeleton}
            width="100%"
            height="100%"
            variant="rectangular"
            borderRadius="32px"
          />
        )}
        <Image src={src} alt="splash-image" fill onLoad={onLoad} />
      </Box>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={cardVariants}
      >
        <Txt {...txtProps.headline1} color={colors.Green1} mb={4}>
          {name}
        </Txt>
        <Txt {...txtProps.body2} color={colors.Green1} mb={3}>
          {bio}
        </Txt>
        <BulletPoint mb={3} />
        <Txt {...txtProps.body3} color={colors.Green1}>
          {title}
        </Txt>
      </motion.div>
    </Box>
  );
};

export const Founders = ({ ...restProps }: FoundersProps) => {
  return (
    <Box bgcolor={colors.White} py={8} {...restProps}>
      <Container>
        <Txt
          {...txtProps.title}
          color={colors.Green1}
          textAlign="center"
          mb={8}
        >
          The Founders
        </Txt>
        <Grid container spacing={10}>
          <Grid item sm={12} md={6}>
            <Founder
              name={'Edouard Rebilly'}
              bio={
                'Edouard brings his experience & background in the carbon markets to launch Green Aid’s carbon impact fund. Prior to his involvement in Green Aid, Ed worked on the investment side in venture capital with a focus on family offices. Ed also co-founded accounting roll-up firm Benchmark Cloud Accounting in 2020 where he currently still sits on the board.'
              }
              src={'/img/ed.webp'}
              title={
                'Education: Business Administration at Northeastern University & HKU'
              }
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Founder
              name={'Leopold Rebilly'}
              bio={
                'Leopold brings substantial experience through the launch of multiple nature-based projects in the Scottish Highlands. Prior to his involvement in Green Aid, Leopold worked in Real Estate development and venture capital where was responsible for the evaluation and development of prospective investment opportunities.'
              }
              src={'/img/leo.webp'}
              title={'Education: B.S in Real Estate at New York University'}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
