import { Box, BoxProps, Container, styled } from '@mui/material';
import { Routes } from '../../constants';
import { LinkedInRoute } from '../../constants/config';
import { colors, txtProps, zIndex } from '../../constants/styleguide';
import { useMobile } from '../../utils/useMobile';
import { LogoSymbol } from '../Icons/LogoSymbol';
import { LogoTxt } from '../Icons/LogoTxt';
import { Link, LinkProps } from '../Link';
import { Txt } from '../Txt';

export interface FooterProps extends BoxProps {}

export const StyledTxt = styled(Txt)`
  text-decoration: none;

  &:hover {
    color: ${colors.Green3};
  }
`;

export const Footer = ({ ...restProps }: FooterProps) => {
  const isXs = useMobile('xs');
  const Logo = (
    <Box display="flex" flexDirection="column" alignItems="center" mb={8}>
      <LogoSymbol variant="dark" mb={1} />
      <LogoTxt variant="light" />
    </Box>
  );

  const linkProps: LinkProps['linkProps'] = {
    color: colors.White,
    underline: 'never',
  };

  const Links = (
    <Box
      display="flex"
      flexDirection={isXs ? 'column' : 'row'}
      {...(isXs && { alignItems: 'center' })}
    >
      <Box
        component={Link}
        href={Routes.WhatWeDo}
        linkProps={linkProps}
        {...(!isXs && { mr: 2 })}
        {...(isXs && { mb: 2 })}
      >
        <Txt {...txtProps.headline2}>What We Do</Txt>
      </Box>
      <Box
        component={Link}
        href={Routes.AboutUs}
        linkProps={linkProps}
        {...(isXs && { mb: 2 })}
        {...(!isXs && { mr: 2 })}
      >
        <Txt {...txtProps.headline2}>About Us</Txt>
      </Box>
      <Box
        component={Link}
        href={Routes.ContactUs}
        linkProps={linkProps}
        {...(isXs && { mb: 2 })}
        {...(!isXs && { mr: 2 })}
      >
        <Txt {...txtProps.headline2}>Contact Us</Txt>
      </Box>
    </Box>
  );

  const LegalLinks = (
    <Box display="flex" {...(isXs && { alignItems: 'center' })}>
      <Box
        component={Link}
        href={Routes.Home}
        linkProps={linkProps}
        mr={2}
        {...(!isXs && { pl: 2 })}
        {...(isXs && { mb: 2 })}
      >
        <Txt {...txtProps.body2}>Privacy Policy</Txt>
      </Box>
      <Box
        component={Link}
        href={Routes.Home}
        linkProps={linkProps}
        mr={2}
        {...(isXs && { mb: 2 })}
      >
        <Txt {...txtProps.body2}>Cookie Policy</Txt>
      </Box>
      <Box
        component={Link}
        href={Routes.Home}
        linkProps={linkProps}
        {...(isXs && { mb: 2 })}
      >
        <Txt {...txtProps.body2}>Terms & Conditions</Txt>
      </Box>
    </Box>
  );

  return (
    <Box
      bgcolor={colors.Black}
      width="100%"
      pt={9}
      pb={3}
      zIndex={zIndex.AlwaysTop}
      {...restProps}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={isXs ? 'center' : 'flex-start'}
          mb={16}
        >
          {Logo}
          {Links}
        </Box>

        <Box
          display="flex"
          flexDirection={isXs ? 'column-reverse' : 'row'}
          {...(isXs
            ? { alignItems: 'center' }
            : { justifyContent: 'space-between' })}
        >
          <Box
            component={Link}
            href={LinkedInRoute}
            linkProps={linkProps}
            external
            {...(isXs && { mb: 2 })}
          >
            <StyledTxt {...txtProps.body2}>Find us on LinkedIn</StyledTxt>
          </Box>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
            {/* {LegalLinks} */}
            <Txt {...txtProps.body2} color={colors.White} ml={2}>
              © {new Date().getFullYear()} ALL RIGHTS RESERVED GREEN AID CORPS
              LTD
            </Txt>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
