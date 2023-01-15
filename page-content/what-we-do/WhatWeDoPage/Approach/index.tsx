import { Grid, Skeleton } from '@mui/material';
import { Container } from '@mui/system';
import { Box, BoxProps } from '../../../../components/Box';
import { BulletPoint } from '../../../../components/Icons/BulletPoint';
import { Txt } from '../../../../components/Txt';
import { colors, txtProps } from '../../../../constants/styleguide';
import Image from 'next/image';
import { useMobile } from '../../../../utils/useMobile';
import { useState } from 'react';
import { LogoSymbol } from '../../../../components/Icons/LogoSymbol';

export interface ApproachProps extends BoxProps {}

interface BulletProps extends BoxProps {
	text: string;
}
const Bullet = ({ text, ...restProps }: BulletProps) => {
	return (
		<Box display="flex" {...restProps}>
			<LogoSymbol mr={1} variant="green" />
			<Txt {...txtProps.body2} color={colors.Green1} display="inline">
				{text}
			</Txt>
		</Box>
	);
};

const COPY = [
	'Facilitate access to a fast-growing highly-specialised market',
	'Offer a diversified investment strategy (5+ project types per portfolio)',
	'Foster strong industry relationships with project developers',
	'Provide exposure to long-term commodity cycles with carbon credit distributions'
];

export const Approach = ({ ...restProps }: ApproachProps) => {
	const isMd = useMobile('md');

	const [imageLoaded, setImageLoaded] = useState(false);
	const onLoad = () => setImageLoaded(true);

	return (
		<Box bgcolor={colors.White} py={8} {...restProps}>
			<Container>
				<Box bgcolor={colors.Green3} width="100%" borderRadius="48px">
					<Grid container>
						<Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
							<Box
								display="flex"
								flexDirection="column"
								alignItems="center"
								py={10}
							>
								<Box px={12}>
									<Txt
										{...txtProps.title}
										color={colors.Green1}
										mb={6}
									>
										The Green Aid Approach
									</Txt>

									{COPY.map((text, index) => (
										<Bullet
											{...(index < COPY.length && {
												mb: 3
											})}
											text={text}
										/>
									))}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
							<Box
								width="100%"
								height={{ xs: '400px', md: '100%' }}
								position="relative"
								borderRadius={{
									xs: '48px 48px 0px 0px',
									md: '0px 48px 48px 0px'
								}}
								overflow="hidden"
							>
								{!imageLoaded && (
									<Skeleton
										width="100%"
										height="100%"
										variant="rectangular"
									/>
								)}
								<Image
									src="/img/valley.webp"
									alt="valley-image"
									fill
									onLoad={onLoad}
									{...(isMd && { objectFit: 'cover' })}
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};
