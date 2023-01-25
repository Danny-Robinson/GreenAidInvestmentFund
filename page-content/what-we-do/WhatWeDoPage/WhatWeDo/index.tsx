import { Container } from '@mui/material';
import Image from 'next/image';
import { Box, BoxProps } from '../../../../components/Box';
import { Txt } from '../../../../components/Txt';
import { WorkflowDesktop } from '../../../../components/Workflow/Desktop';
import { WorkflowMobile } from '../../../../components/Workflow/Mobile';
import {
  breakpoints,
  colors,
  txtProps,
} from '../../../../constants/styleguide';
import { useMobile } from '../../../../utils/useMobile';

export interface WhatWeDoProps extends BoxProps {}

export const WhatWeDo = ({ ...restProps }: WhatWeDoProps) => {
  const isSm = useMobile('sm');

  return (
    <Box bgcolor={colors.Green1} pt={5} pb={10} {...restProps}>
      <Container>
        <Box display="flex" flexDirection="column">
          <Txt
            {...txtProps.title}
            color={colors.White}
            mb={{ xs: 4, sm: 10 }}
            textAlign="center"
          >
            What We Do
          </Txt>
          <Box
            pt={{ xs: 0, sm: 4 }}
            display="flex"
            justifyContent="center"
            height="100%"
            width={{ xs: 'calc(100% - 32px)', md: '100%' }}
            px={{ xs: 2, md: 0 }}
          >
            {isSm ? <WorkflowMobile /> : <WorkflowDesktop width="70%" />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
