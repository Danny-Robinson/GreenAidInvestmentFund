import { Container } from '@mui/material';
import { Box, BoxProps } from '../../../components/Box';
import { Button } from '../../../components/Button';
import { Txt } from '../../../components/Txt';
import { colors, txtProps } from '../../../constants/styleguide';
import { CurrentOpenings } from './CurrentOpenings';

export interface JoinOurTeamProps extends BoxProps {}

export const JoinOurTeam = ({ ...restProps }: JoinOurTeamProps) => {
  return (
    <Box bgcolor={colors.White} {...restProps}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          py={15}
          textAlign="center"
        >
          <Txt {...txtProps.title} color={colors.Green1} mb={6}>
            Join Our Team
          </Txt>
          <Txt
            {...txtProps.body1}
            color={colors.Green1}
            mb={6}
            maxWidth={{ xs: '100%', sm: '60%' }}
          >
            We are always looking to hear from talented individuals. You can
            find our job opening below or contact us if you think you can add to
            our team.
          </Txt>
          <Button href="www.google.com">Contact us (link to do)</Button>
        </Box>
        <CurrentOpenings mb={8} />
      </Container>
    </Box>
  );
};
