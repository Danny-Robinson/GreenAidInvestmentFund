import { BoxProps, styled } from '@mui/material';
import { FC } from 'react';
import { Box } from '../Box';

export const GradientBox: FC<
	BoxProps & {
		rgbColor: string;
		direction: string;
		strength1?: string;
		strength2?: string;
	}
> = styled(Box)`
	background: ${({
		rgbColor,
		direction,
		strength1 = '0',
		strength2 = '0.2'
	}: {
		rgbColor: string;
		direction: string;
		strength1: string;
		strength2: string;
	}) =>
		`-webkit-linear-gradient(${direction}, rgba(${rgbColor},${strength1}), rgba(${rgbColor},${strength2}))`};
`;
