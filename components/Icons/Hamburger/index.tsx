import { Box, BoxProps } from '@mui/material';
import { colors } from '../../../constants/styleguide';

export interface HamburgerProps extends BoxProps {
	variant: 'dark' | 'light';
}

export const Hamburger = ({ variant, ...restProps }: HamburgerProps) => {
	return (
		<Box {...restProps}>
			<svg
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 1.90842H26"
					stroke={variant === 'dark' ? colors.Green1 : colors.White}
					stroke-width="3"
					stroke-linecap="round"
				/>
				<path
					d="M2 13.9084H26"
					stroke={variant === 'dark' ? colors.Green1 : colors.White}
					stroke-width="3"
					stroke-linecap="round"
				/>
				<path
					d="M2 25.9084H26"
					stroke={variant === 'dark' ? colors.Green1 : colors.White}
					stroke-width="3"
					stroke-linecap="round"
				/>
			</svg>
		</Box>
	);
};
