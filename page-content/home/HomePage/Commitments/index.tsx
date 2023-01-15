import { BoxProps, Container, Grid } from '@mui/material';
import { Box } from '../../../../components/Box';
import { LogoSymbol } from '../../../../components/Icons/LogoSymbol';
import { Txt } from '../../../../components/Txt';
import { colors, txtProps } from '../../../../constants/styleguide';
import { useMobile } from '../../../../utils/useMobile';

export interface CommitmentsProps extends BoxProps {}

const COPY = [
	'Reducing barriers to entry for investors seeking exposure to the voluntary carbon market (VCM)',
	'Committed to the integrity based scalability of the VCM by ensuring delivery of the highest quality credits',
	'Distributing a predetermined supply of carbon credits through nature and technology based projects',
	'Committed to positively impacting local communities & wildlife conservation efforts',
	'Proven track record in the U.K'
];

const Commitment = ({ text }: { text: string }) => {
	const isXs = useMobile('xs');

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<LogoSymbol variant="green" mb={4} />
			<Txt
				{...txtProps.body2}
				color={colors.Black}
				textAlign="center"
				{...(isXs && { maxWidth: 220, mb: 4 })}
			>
				{text}
			</Txt>
		</Box>
	);
};

export const Commitments = ({ ...restProps }: CommitmentsProps) => {
	return (
		<Box py={15} {...restProps}>
			<Container>
				<Grid container spacing={4}>
					{COPY.map((text, index) => {
						return (
							<Grid
								key={`commitment-${index}`}
								item
								xs={12}
								sm={12 / 5}
							>
								<Commitment text={text} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};
