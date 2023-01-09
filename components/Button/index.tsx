import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
	styled
} from '@mui/material';
import { colors } from '../../constants/styleguide';

const StyledButton = styled(MuiButton)`
	color: ${colors.White};
	background-color: ${colors.Green2};
	text-transform: none;

	&:hover {
		background-color: ${colors.Green3};
	}
`;

export interface ButtonProps extends MuiButtonProps {}

export const Button = ({ ...restProps }: ButtonProps) => {
	return <StyledButton {...restProps}></StyledButton>;
};
