import { Box, BoxProps, styled } from '@mui/material';
import { Container } from '@mui/system';
import { Routes } from '../../constants';
import { colors, txtProps, zIndex } from '../../constants/styleguide';
import { useMobile } from '../../utils/useMobile';
import { Link, LinkProps } from '../Link';
import { LogoSymbol } from '../Icons/LogoSymbol';
import { LogoTxt } from '../Icons/LogoTxt';
import { Txt } from '../Txt';
import { Hamburger } from '../Icons/Hamburger';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface HeaderProps extends BoxProps {}

export const Header = ({ ...restProps }: HeaderProps) => {
	const isXs = useMobile('xs');
	const [scrollY, setScrollY] = useState(0);
	const router = useRouter();
	const isHome = router.pathname === Routes.Home;

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

	const isAtTop = scrollY === 0;
	const isLightMode = isHome && isAtTop;

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

	return (
		<Box
			width="100%"
			position="fixed"
			top={0}
			{...(!isAtTop && { bgcolor: colors.White })}
			py={1}
			zIndex={zIndex.AlwaysTop}
			{...restProps}
		>
			<Container>
				<Box display="flex" justifyContent="space-between">
					{isHome ? Logo : <Link href={Routes.Home}>{Logo}</Link>}

					<Box display="flex" alignItems="center">
						{isXs ? (
							<Hamburger variant={isAtTop ? 'light' : 'dark'} />
						) : (
							<>
								<Box
									component={Link}
									href={Routes.WhatWeDo}
									linkProps={linkProps}
									mx={2}
								>
									<Txt {...txtProps.headline2}>
										What we do
									</Txt>
								</Box>
								<Box
									component={Link}
									href={Routes.AboutUs}
									linkProps={linkProps}
									mx={2}
								>
									<Txt {...txtProps.headline2}>About Us</Txt>
								</Box>
								<Box
									component={Link}
									href={Routes.ContactUs}
									linkProps={linkProps}
									mx={2}
								>
									<Txt {...txtProps.headline2}>
										Contact Us
									</Txt>
								</Box>
							</>
						)}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
