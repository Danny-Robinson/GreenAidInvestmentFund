import { Box, BoxProps } from '@mui/material';

export interface BulletPointProps extends BoxProps {}

export const BulletPoint = ({ ...restProps }: BulletPointProps) => {
	return (
		<Box {...restProps}>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8 14.7805V1.21951"
					stroke="#93C330"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M1.21948 8H14.7805"
					stroke="#93C330"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M3.43896 12.5854L12.5853 3.43903"
					stroke="#93C330"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M3.43896 3.43903L12.5853 12.5854"
					stroke="#93C330"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</Box>
	);
};
