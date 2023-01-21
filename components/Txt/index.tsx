import styled from '@emotion/styled';
import { CSSProperties } from '@mui/styles';
import MuiTypography, { TypographyTypeMap } from '@mui/material/Typography';

import {
  OverrideProps,
  OverridableComponent,
} from '@mui/material/OverridableComponent';

interface TxtTypeMap<P = {}, D extends React.ElementType = 'span'>
  extends Omit<TypographyTypeMap<P, D>, 'props'> {
  props: TypographyTypeMap<P, D>['props'] & {
    lineClamp?: CSSProperties['lineClamp'];
    textTransform?: CSSProperties['textTransform'];
    textDecoration?: CSSProperties['textDecoration'];
  };
}

export type TxtProps<
  D extends React.ElementType = TxtTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TxtTypeMap<P, D>, D>;

const getLineClampProperties = (lineClamp: TxtProps['lineClamp']) =>
  lineClamp
    ? `
        line-clamp: ${lineClamp};
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${lineClamp};
    `
    : '';

const getTextTransform = (textTransform: TxtProps['textTransform']) =>
  textTransform ? `text-transform: ${textTransform};` : '';

const getTextDecoration = (textDecoration: TxtProps['textDecoration']) =>
  textDecoration ? `text-decoration: ${textDecoration};` : '';

export const Txt = styled(MuiTypography, {
  shouldForwardProp: (prop: string) =>
    !['textTransform', 'lineClamp', 'textDecoration'].includes(prop),
})`
  font-family: futura-pt;
  ${(props: TxtProps) => `
        ${getLineClampProperties(props.lineClamp)}
        ${getTextTransform(props.textTransform)}
        ${getTextDecoration(props.textDecoration)}
    `}
` as OverridableComponent<TxtTypeMap>;
