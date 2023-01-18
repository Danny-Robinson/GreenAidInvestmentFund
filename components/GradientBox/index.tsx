import { BoxProps, styled } from '@mui/material';
import { FC } from 'react';
import { Box } from '../Box';

export const GradientBox: FC<
  BoxProps & {
    rgbcolor: string;
    direction: string;
    strength1?: string;
    strength2?: string;
  }
> = styled(Box)`
  background: ${({
    rgbcolor,
    direction,
    strength1 = '0',
    strength2 = '0.2',
  }: {
    rgbcolor: string;
    direction: string;
    strength1: string;
    strength2: string;
  }) =>
    `-webkit-linear-gradient(${direction}, rgba(${rgbcolor},${strength1}), rgba(${rgbcolor},${strength2}))`};
`;
