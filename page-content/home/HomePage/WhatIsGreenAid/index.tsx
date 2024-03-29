import { Box, BoxProps, Container } from '@mui/material';
import { Animate } from '../../../../components/Animate';
import { Button } from '../../../../components/Button';
import { Txt } from '../../../../components/Txt';
import { Routes } from '../../../../constants';
import { LinkedInRoute } from '../../../../constants/config';
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
          itemScope
          itemType="http://schema.org/InvestmentOrDeposit"
        >
          <Animate>
            <Txt
              component="h2"
              {...txtProps.title}
              mb={6}
              color={colors.Green1}
              itemProp="name"
            >
              What is Green Aid
            </Txt>
          </Animate>
          <Animate>
            <Txt
              {...txtProps.body1}
              mb={{ xs: 6, sm: 4 }}
              maxWidth={620}
              textAlign="center"
              color={colors.Green1}
              itemProp="description"
            >
              Green Aid is an investment fund focused on accelerating private
              sector investments into high-impact nature and technology based
              solutions globally.
            </Txt>
          </Animate>
          <Animate>
            <Button href={Routes.WhatWeDo}>
              <Txt {...txtProps.body2}>Find out more</Txt>
            </Button>
          </Animate>
          <meta itemProp="url" content="https://www.greenaid.com/" />
          <meta itemProp="sameAs" content={LinkedInRoute} />
        </Box>
      </Container>
    </Box>
  );
};
