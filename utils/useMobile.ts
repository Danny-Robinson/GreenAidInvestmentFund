import { useTheme, useMediaQuery } from '@mui/material';

export const useMobile = (breakpoint: 'xs' | 'sm' | 'md' | 'lg') => {
	const theme = useTheme();
	const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
	const nextBreakpoint = breakpoints[
		breakpoints.indexOf(breakpoint) + 1
	] as keyof typeof theme.breakpoints.values;
	return useMediaQuery(
		`(max-width:${theme.breakpoints.values[nextBreakpoint] - 1}px)`,
		{ noSsr: true }
	);
};
