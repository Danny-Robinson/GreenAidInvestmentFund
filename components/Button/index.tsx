import { CircularProgress, CircularProgressProps, styled } from '@mui/material';
import MuiButton, {
	ButtonProps as MaterialButtonProps
} from '@mui/material/Button';
import { colors } from '../../constants/styleguide';
import { Box } from '../Box';
import { PrestyledLink } from '../Link';

const StyledButton = styled(MuiButton)`
	color: ${colors.White};
	background-color: ${colors.Green2};
	text-transform: none;
	padding-right: 24px;
	padding-left: 24px;

	&:hover {
		background-color: ${colors.Green3};
	}
`;

export const Link = styled(PrestyledLink)`
	text-decoration: none;
`;

export interface ButtonProps extends MaterialButtonProps {
	loading?: boolean;
	newTab?: boolean;
}

export const Button = (props: ButtonProps) => {
	const { children, loading, newTab, href, ...restProps } = props;

	const circularProgressProps = {
		size: 15,
		color: 'inherit'
	} as CircularProgressProps;

	const BaseButton = (
		<StyledButton {...restProps}>
			<Box
				visibility={loading ? 'hidden' : 'visible'}
				textDecoration="none"
			>
				{children}
			</Box>
			{loading && (
				<Box
					component={CircularProgress}
					position="absolute"
					{...circularProgressProps}
				/>
			)}
		</StyledButton>
	);

	if (href && newTab) {
		return (
			<Box
				component="a"
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				textDecoration="none"
			>
				{BaseButton}
			</Box>
		);
	}

	if (href) {
		return (
			<Link href={href} passHref linkProps={{ underline: 'never' }}>
				{BaseButton}
			</Link>
		);
	}

	return BaseButton;
};
