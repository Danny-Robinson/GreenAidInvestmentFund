import { Box, BoxProps, Container, Grid, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { GradientBox } from '../../../components/GradientBox';
import { Txt } from '../../../components/Txt';
import { breakpoints, colors, txtProps } from '../../../constants/styleguide';
import { useMobile } from '../../../utils/useMobile';

export interface HeroBannerProps extends BoxProps {}

export const HeroBanner = ({ ...restProps }: HeroBannerProps) => {
	const imageHeight = {
		xs: 'calc(33vh)',
		sm: 'calc(100vw / 1.5) ',
		md: `calc(max(100vw / 2.25, ${breakpoints.values.md}px / 2.25))`,
		lg: `calc(max(100vw / 3, ${breakpoints.values.lg}px / 3))`
	};

	const isSm = useMobile('sm');
	const [imageLoaded, setImageLoaded] = useState(false);
	const onLoad = () => setImageLoaded(true);

	const text = (
		<>
			<Txt {...txtProps.headline1} color={colors.White} maxWidth="450px">
				In order to protect the integrity of the voluntary carbon
				market, we must place a strong emphasis on the additional
				co-benefits that our projects provide. Focus on climate is not
				enough. A positive impact on biodiversity, local communities,
				and all other stakeholders is paramount.
			</Txt>
			<Txt {...txtProps.body1} color={colors.White} mt={2} mb={10}>
				<Txt fontWeight={700} display="inline">
					Leopold Rebilly
				</Txt>{' '}
				- Co-founder
			</Txt>
		</>
	);

	if (isSm) {
		return (
			<Box bgcolor={colors.Green1} {...restProps}>
				<Grid container>
					<Grid item xs={12}>
						<Box
							display="flex"
							flexDirection="column"
							px={10}
							pt={15}
						>
							{text}
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box
							width="100%"
							height={imageHeight}
							position="relative"
						>
							{!imageLoaded && (
								<Skeleton
									width="100%"
									height="100%"
									variant="rectangular"
								/>
							)}
							<Image
								src="/img/about-us-splash2.png"
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
					<Skeleton
						width="100%"
						height="100%"
						variant="rectangular"
					/>
				)}
				<GradientBox
					position="absolute"
					height="100%"
					width="calc(50% - 22px)"
					right={0}
					direction="bottom"
					zIndex={2}
					rgbColor={'0,2,0'}
				/>
				<Image
					src="/img/about-us-splash.png"
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
								pt={{ xs: 0, sm: 10, md: 15 }}
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
