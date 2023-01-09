import { Box, BoxProps, styled } from '@mui/material';
import { Container } from '@mui/system';
import { Routes } from '../../constants';
import { colors, txtProps } from '../../constants/styleguide';
import { useMobile } from '../../utils/useMobile';
import { Link, LinkProps } from '../Link';
import { LogoSymbol } from '../Icons/LogoSymbol';
import { LogoTxt } from '../Icons/LogoTxt';
import { Txt } from '../Txt';
import { Hamburger } from '../Icons/Hamburger';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface HeaderProps extends BoxProps {}

const StyledLink = styled(Link)`
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

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
	const Logo = (
		<Box display="flex" alignItems="center">
			<LogoSymbol variant={isAtTop ? 'light' : 'dark'} mr={2} />
			<LogoTxt variant={isAtTop ? 'light' : 'dark'} />
		</Box>
	);

	const linkProps: LinkProps['linkProps'] = {
		color: isAtTop ? colors.White : colors.Green1,
		underline: 'never'
	};

	return (
		<Box
			width="100%"
			position="fixed"
			top={0}
			{...(!isAtTop && { bgcolor: colors.White })}
			py={1}
			{...restProps}
		>
			<Container>
				<Box display="flex" justifyContent="space-between">
					{isHome ? Logo : <Link href={Routes.Home}>{Logo}</Link>}

					<Box display="flex" alignItems="center">
						{isXs ? (
							<Hamburger height="20px" />
						) : (
							<>
								<Box
									component={StyledLink}
									href={Routes.WhatWeDo}
									linkProps={linkProps}
									mx={2}
								>
									<Txt {...txtProps.headline2}>
										What we do
									</Txt>
								</Box>
								<Box
									component={StyledLink}
									href={Routes.AboutUs}
									linkProps={linkProps}
									mx={2}
								>
									<Txt {...txtProps.headline2}>About Us</Txt>
								</Box>
								<Box
									component={StyledLink}
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
