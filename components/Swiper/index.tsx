import {
  Swiper as SwiperReact,
  SwiperProps as ReactSwiperProps,
} from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

interface SwiperProps extends ReactSwiperProps {}
export const Swiper = ({ children, ...restProps }: SwiperProps) => {
  SwiperCore.use([Autoplay]);

  return <SwiperReact {...restProps}>{children}</SwiperReact>;
};
