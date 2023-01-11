import { Box, BoxProps, Container } from '@mui/material';
import Image from 'next/image';
import { Txt } from '../../../../components/Txt';
import {
	breakpoints,
	colors,
	txtProps
} from '../../../../constants/styleguide';
import { useMobile } from '../../../../utils/useMobile';

export interface HeroBannerProps extends BoxProps {}

export const HeroBanner = ({ ...restProps }: HeroBannerProps) => {
	const imageHeight = {
		xs: 'calc(75vh)',
		sm: 'calc(100vw / 1.5) ',
		md: `calc(max(100vw / 2.25, ${breakpoints.values.md}px / 2.25))`,
		lg: `calc(max(100vw / 3, ${breakpoints.values.lg}px / 3))`
	};

	const isXs = useMobile('xs');

	return (
		<Box {...restProps}>
			<Box width="100%" height={imageHeight} position="relative">
				<Image
					src="/img/splash.webp"
					alt="splash-image"
					fill
					{...(isXs && { objectFit: 'cover' })}
				/>
				<Box position="absolute" width="100%" top={'calc(50% - 60px)'}>
					<Container>
						<Box display="flex" justifyContent="center">
							<Txt
								{...txtProps.title}
								color={colors.White}
								maxWidth="450px"
								textAlign="center"
							>
								Accelerating private sector investments into a
								net-zero future
							</Txt>
						</Box>
					</Container>
				</Box>
			</Box>
		</Box>
	);
};
