import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Box, BoxProps } from '../../../../components/Box';
import { BulletPoint } from '../../../../components/Icons/BulletPoint';
import { Txt } from '../../../../components/Txt';
import { colors, txtProps } from '../../../../constants/styleguide';
import Image from 'next/image';
import { useMobile } from '../../../../utils/useMobile';

export interface ApproachProps extends BoxProps {}

interface BulletProps extends BoxProps {
	text: string;
}
const Bullet = ({ text, ...restProps }: BulletProps) => {
	return (
		<Box display="flex" {...restProps}>
			<BulletPoint mr={1} />
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
	const isSm = useMobile('sm');

	return (
		<Box bgcolor={colors.White} py={10} {...restProps}>
			<Container>
				<Box
					bgcolor={colors.Green3}
					boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
					width="100%"
					borderRadius="20px"
				>
					<Grid container>
						<Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
							<Box
								display="flex"
								flexDirection="column"
								alignItems="center"
								py={10}
							>
								<Box px={5}>
									<Txt
										{...txtProps.title}
										color={colors.Green1}
										mb={4}
									>
										The Green Aid Approach
									</Txt>

									{COPY.map((text, index) => (
										<Bullet
											{...(index < COPY.length && {
												mb: 2
											})}
											text={text}
										/>
									))}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
							<Box
								width="100%"
								height={{ xs: '400px', sm: '100%' }}
								position="relative"
								borderRadius={{
									xs: '20px 20px 0px 0px',
									sm: '0px 20px 20px 0px'
								}}
								overflow="hidden"
							>
								<Image
									src="/img/cottage.png"
									alt="splash-image"
									fill
									{...(isSm && { objectFit: 'cover' })}
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};
