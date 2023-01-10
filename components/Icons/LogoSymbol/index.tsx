import { Box, BoxProps } from '@mui/material';
import { colors } from '../../../constants/styleguide';

export interface LogoSymbolProps extends BoxProps {
	variant: 'dark' | 'light' | 'green';
}

export const LogoSymbol = ({ variant, ...restProps }: LogoSymbolProps) => {
	const logoColor = (() => {
		switch (variant) {
			case 'dark':
				return colors.Green1;
			case 'light':
				return colors.White;
			case 'green':
				return colors.Green2;
		}
	})();

	return (
		<Box {...restProps}>
			<svg
				width="25"
				height="28"
				viewBox="0 0 25 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12.2812 10.453C15.0759 10.453 17.3414 8.16988 17.3414 5.35356C17.3414 2.53723 15.0759 0.25415 12.2812 0.25415C9.48649 0.25415 7.22095 2.53723 7.22095 5.35356C7.22095 8.16988 9.48649 10.453 12.2812 10.453Z"
					fill={variant === 'green' ? colors.Green2 : colors.Green3}
				/>
				<path
					d="M16.1333 12.7755C14.4349 14.2693 13.4614 16.4327 13.4614 18.7037V27.7459H14.4558C14.4558 26.3927 15.0367 25.1049 16.0473 24.2129L21.8905 19.069C23.5889 17.5752 24.5623 15.4118 24.5623 13.1408V5.35352L16.1309 12.7755H16.1333Z"
					fill={logoColor}
				/>
				<path
					d="M8.42907 12.7755C10.1274 14.2693 11.1009 16.4327 11.1009 18.7037V23.9319V26.491V27.7459H10.1065C10.1065 26.3927 9.52569 25.1049 8.51504 24.2129L2.67184 19.069C0.973479 17.5752 0 15.4118 0 13.1408V5.35352L8.4314 12.7755H8.42907Z"
					fill={logoColor}
				/>
			</svg>
		</Box>
	);
};
