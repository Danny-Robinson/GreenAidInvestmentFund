import { BoxProps, Container, Grid } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { Box } from '../../../../components/Box';
import { LogoSymbol } from '../../../../components/Icons/LogoSymbol';
import { Swiper } from '../../../../components/Swiper';
import { Txt } from '../../../../components/Txt';
import { colors, txtProps } from '../../../../constants/styleguide';
import { useMobile } from '../../../../utils/useMobile';
import { Thumbs } from 'swiper';
import { useEffect, useState } from 'react';
import { GradientBox } from '../../../../components/GradientBox';
import { SwiperEvents } from 'swiper/types';

export interface CommitmentsProps extends BoxProps {}

const COPY = [
  'Reducing barriers to entry for investors seeking exposure to the voluntary carbon market (VCM)',
  'Committed to the integrity based scalability of the VCM by ensuring delivery of the highest quality credits',
  'Distributing a predetermined supply of carbon credits through nature and technology based projects',
  'Committed to positively impacting local communities & wildlife conservation efforts',
];

const Commitment = ({
  text,
  selected,
}: {
  text: string;
  selected: boolean;
}) => {
  const isXs = useMobile('xs');

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor={colors.White}
      p={8}
      borderRadius="30px"
      minHeight={'12vw'}
    >
      {isXs && !selected && (
        <GradientBox
          position="absolute"
          height="100%"
          width="100%"
          rgbcolor={'0,0,0'}
          strength1="0.2"
          strength2="0.2"
          direction={'top'}
          top={0}
          borderRadius="30px"
        />
      )}
      <LogoSymbol variant="green" mb={4} />
      <Txt {...txtProps.body2} color={colors.Black} textAlign="center">
        {text}
      </Txt>
    </Box>
  );
};

export const Commitments = ({ ...restProps }: CommitmentsProps) => {
  const [swiper, setSwiper] = useState(undefined);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isXs = useMobile('xs');
  const isSm = useMobile('sm');

  const onSlideChange = (swiper: any) => {
    setSelectedIndex(swiper.realIndex);
  };

  // useEffect(() => {
  // 	if (swiper?.realIndex !== selectedIndex) {
  // 		setSelectedIndex(swiper?.realIndex);
  // 	}
  // }, [swiper, selectedIndex, setSelectedIndex]);

  const onChangeSwiper = (index: number) => swiper?.slideTo(index);

  return (
    <Box py={15} bgcolor={colors.Green1} {...restProps}>
      <Container>
        <Swiper
          onSwiper={setSwiper}
          watchSlidesProgress
          spaceBetween={50}
          centeredSlides={isXs}
          slidesPerView={isXs ? 1.5 : isSm ? 2 : 3}
          onSlideChange={onSlideChange}
        >
          {COPY.map((text, index) => (
            <SwiperSlide key={`swiper-slide-${index}`}>
              <Commitment text={text} selected={index === selectedIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box display="flex" width="100%" justifyContent="center" mt={4}>
          {(isXs ? COPY : [0, 1]).map((_item, index) => {
            const selected = index === selectedIndex;
            const onClick = () => onChangeSwiper(index);

            return (
              <Box
                key={`swiper-control-${index}`}
                borderRadius="50%"
                height={10}
                width={10}
                onClick={onClick}
                bgcolor={selected ? colors.Green2 : colors.Green4}
                ml={2}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
