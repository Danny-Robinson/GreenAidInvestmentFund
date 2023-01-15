import { BoxProps, styled } from '@mui/material';
import { FC } from 'react';
import { Box } from '../Box';

export const GradientBox: FC<
	BoxProps & { rgbColor: string; direction: string }
> = styled(Box)`
	background: ${({
		rgbColor,
		direction
	}: {
		rgbColor: string;
		direction: string;
	}) =>
		`-webkit-linear-gradient(${direction}, rgba(${rgbColor},0), rgba(${rgbColor},0.2))`};
`;
