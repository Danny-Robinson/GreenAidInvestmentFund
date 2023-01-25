import { Box, Container, Grid, styled } from '@mui/material';
import { ReactNode } from 'react';
import { BoxProps } from '../../../components/Box';
import { LogoSymbol } from '../../../components/Icons/LogoSymbol';
import { Link } from '../../../components/Link';
import { Txt } from '../../../components/Txt';
import { LinkedInRoute } from '../../../constants/config';
import { colors, txtProps } from '../../../constants/styleguide';

export interface ContactProps extends BoxProps {}

interface MethodProps extends BoxProps {
  header: string;
  method: ReactNode;
}

export const StyledTxt = styled(Txt)`
  text-decoration: none;

  &:hover {
    color: ${colors.Green2};
  }
`;

const Method = ({ header, method, ...restProps }: MethodProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      {...restProps}
    >
      <LogoSymbol variant="green" mb={3} />
      <Txt {...txtProps.headline1} color={colors.Black}>
        {header}
      </Txt>
      {method}
    </Box>
  );
};

export const Contact = ({ ...restProps }: ContactProps) => {
  return (
    <Box bgcolor={colors.Green3} py={12} {...restProps}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Method
              header="Our email"
              method={
                <Link
                  external
                  href="mailto:info@greenaid.com"
                  linkProps={{ underline: 'never' }}
                >
                  <StyledTxt color={colors.Black}>info@greenaid.com</StyledTxt>
                </Link>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Method
              header="Find us on"
              method={
                <Box
                  component={Link}
                  href={LinkedInRoute}
                  linkProps={{
                    color: colors.Black,
                    underline: 'never',
                  }}
                  external
                >
                  <StyledTxt {...txtProps.body2}>LinkedIn</StyledTxt>
                </Box>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
