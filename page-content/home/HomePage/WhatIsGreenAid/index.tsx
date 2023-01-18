import { Box, BoxProps, Container } from '@mui/material';
import { Button } from '../../../../components/Button';
import { Txt } from '../../../../components/Txt';
import { Routes } from '../../../../constants';
import { colors, txtProps } from '../../../../constants/styleguide';

export interface WhatIsGreenAidProps extends BoxProps {}

export const WhatIsGreenAid = ({ ...restProps }: WhatIsGreenAidProps) => {
  return (
    <Box bgcolor={colors.White} {...restProps}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          py={{ xs: 25, sm: 15 }}
        >
          <Txt {...txtProps.title} mb={6} color={colors.Green1}>
            What is Green Aid
          </Txt>
          <Txt
            {...txtProps.body1}
            mb={{ xs: 6, sm: 4 }}
            maxWidth={620}
            textAlign="center"
            color={colors.Green1}
          >
            Green Aid is an investment fund focused on accelerating private
            sector investments into high-impact nature and technology based
            solutions globally.
          </Txt>
          <Button href={Routes.WhatWeDo}>
            <Txt {...txtProps.body2}>Find out more</Txt>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
