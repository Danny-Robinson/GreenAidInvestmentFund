import {
	Swiper as SwiperReact,
	SwiperProps as ReactSwiperProps
} from 'swiper/react';
import 'swiper/css';

interface SwiperProps extends ReactSwiperProps {}
export const Swiper = ({ children, ...restProps }: SwiperProps) => {
	return <SwiperReact {...restProps}>{children}</SwiperReact>;
};
