import { Box, BoxProps, Drawer, styled } from '@mui/material';
import { Container } from '@mui/system';
import { Routes } from '../../constants';
import {
	breakpoints,
	colors,
	txtProps,
	zIndex
} from '../../constants/styleguide';
import { useMobile } from '../../utils/useMobile';
import { Link, LinkProps } from '../Link';
import { LogoSymbol } from '../Icons/LogoSymbol';
import { LogoTxt } from '../Icons/LogoTxt';
import { Txt } from '../Txt';
import { Hamburger } from '../Icons/Hamburger';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface HeaderProps extends BoxProps {}

export const StyledDrawer = styled(Drawer)`
	.MuiPaper-root .MuiBox-root .MuiTypography-root:hover {
		cursor: default;
	}

	.MuiDrawer-paper {
		width: 100%;
		@media (min-width: ${breakpoints.values.md}px) {
			width: 40%;
		}
		@media (min-width: ${breakpoints.values.lg}px) {
			width: 500px;
		}
	}
`;

export const Header = ({ ...restProps }: HeaderProps) => {
	const isXs = useMobile('xs');
	const [scrollY, setScrollY] = useState(0);
	const router = useRouter();
	const isHome = router.pathname === Routes.Home;

	const [drawerOpen, setDrawerOpen] = useState(false);
	const onOpenDrawer = () => setDrawerOpen(true);
	const onCloseDrawer = () => setDrawerOpen(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (drawerOpen && !isXs) {
			setDrawerOpen(false);
		}
	}, [drawerOpen, setDrawerOpen, isXs]);

	const isAtTop = scrollY === 0;
	const isLightMode = isHome && isAtTop && !drawerOpen;

	const Logo = (
		<Box display="flex" alignItems="center">
			<LogoSymbol variant={isLightMode ? 'light' : 'dark'} mr={2} />
			<LogoTxt variant={isLightMode ? 'light' : 'dark'} />
		</Box>
	);

	const linkProps: LinkProps['linkProps'] = {
		color: isLightMode ? colors.White : colors.Green1,
		underline: 'never'
	};

	const closeDrawerOnLink = { ...(drawerOpen && { onClick: onCloseDrawer }) };
	const Links = (
		<>
			<Box
				component={Link}
				href={Routes.WhatWeDo}
				linkProps={linkProps}
				mx={2}
				{...closeDrawerOnLink}
			>
				<Txt {...txtProps.headline2}>What we do</Txt>
			</Box>
			<Box
				component={Link}
				href={Routes.AboutUs}
				linkProps={linkProps}
				mx={2}
				{...closeDrawerOnLink}
			>
				<Txt {...txtProps.headline2}>About Us</Txt>
			</Box>
			<Box
				component={Link}
				href={Routes.ContactUs}
				linkProps={linkProps}
				mx={2}
				{...closeDrawerOnLink}
			>
				<Txt {...txtProps.headline2}>Contact Us</Txt>
			</Box>
		</>
	);

	return (
		<>
			{isXs && (
				<StyledDrawer
					anchor="right"
					open={drawerOpen}
					onClose={onCloseDrawer}
				>
					<Box pt={8} bgcolor={colors.White} height="100%">
						<Container>{Links}</Container>
					</Box>
				</StyledDrawer>
			)}
			<Box
				width="100%"
				position="fixed"
				top={0}
				{...(!isAtTop && { bgcolor: colors.White })}
				py={2}
				zIndex={zIndex.AlwaysTop}
				{...restProps}
			>
				<Container>
					<Box display="flex" justifyContent="space-between">
						{isHome ? Logo : <Link href={Routes.Home}>{Logo}</Link>}

						<Box display="flex" alignItems="center">
							{isXs ? (
								drawerOpen ? (
									<Box onClick={onCloseDrawer}>
										close icon
									</Box>
								) : (
									<Hamburger
										variant={isLightMode ? 'light' : 'dark'}
										onClick={onOpenDrawer}
									/>
								)
							) : (
								Links
							)}
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
};
