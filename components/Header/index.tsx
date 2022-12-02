import { Box, BoxProps } from '@mui/material';

export interface HeaderProps extends BoxProps {}

export const Header = ({ ...restProps }: HeaderProps) => {
	return <Box {...restProps}>Header</Box>;
};
