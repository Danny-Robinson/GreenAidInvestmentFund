import styled from '@emotion/styled';
import { CSSProperties } from '@mui/styles';
import MuiBox, { BoxTypeMap as MaterialBoxTypeMap } from '@mui/material/Box';

import {
	OverrideProps,
	OverridableComponent
} from '@mui/material/OverridableComponent';

interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'>
	extends Omit<MaterialBoxTypeMap<P, D>, 'props'> {
	props: MaterialBoxTypeMap<P, D>['props'] & {
		transform?: CSSProperties['transform'];
		verticalAlign?: CSSProperties['verticalAlign'];
		textDecoration?: CSSProperties['textDecoration'];
		opacity?: CSSProperties['opacity'];
		hoverOpacity?: CSSProperties['opacity'];
		cursor?: CSSProperties['cursor'];
		backdropFilter?: CSSProperties['backdropFilter'];
	};
}

export type BoxProps<
	D extends React.ElementType = BoxTypeMap['defaultComponent'],
	P = {}
> = OverrideProps<BoxTypeMap<P, D>, D>;

export const getTransformProperties = (transform: BoxProps['transform']) =>
	transform ? `transform: ${transform};` : '';

export const getVerticalAlignProperties = (
	verticalAlign: BoxProps['verticalAlign']
) => (verticalAlign ? `vertical-align: ${verticalAlign};` : '');

export const getTextDecorationProperties = (
	textDecoration: BoxProps['textDecoration']
) => (textDecoration ? `text-decoration: ${textDecoration};` : '');

export const getOpacity = (opacity: BoxProps['opacity']) =>
	opacity !== undefined ? `opacity: ${opacity};` : '';

export const getCursor = (cursor: BoxProps['cursor']) =>
	cursor ? `cursor: ${cursor};` : '';

export const getHoverOpacity = (hoverOpacity: BoxProps['hoverOpacity']) =>
	hoverOpacity !== undefined
		? `
                transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                cursor: pointer;

                &:hover { 
                    opacity: ${hoverOpacity}; 
                }
            `
		: '';

export const getBackdropFilter = (backdropFilter: BoxProps['backdropFilter']) =>
	backdropFilter ? `backdrop-filter: ${backdropFilter};` : '';

export const Box = styled(MuiBox, {
	shouldForwardProp: (prop: string) =>
		![
			'transform',
			'verticalAlign',
			'opacity',
			'hoverOpacity',
			'cursor',
			'textDecoration',
			'transform',
			'verticalAlign',
			'backdropFilter'
		].includes(prop)
})`
	${(props: BoxProps) => `
        ${getTransformProperties(props.transform)}
        ${getVerticalAlignProperties(props.verticalAlign)}
        ${getTextDecorationProperties(props.textDecoration)}
        ${getOpacity(props.opacity)}
        ${getHoverOpacity(props.hoverOpacity)}
        ${getCursor(props.cursor)}
        ${getBackdropFilter(props.backdropFilter)}
    `}
` as OverridableComponent<BoxTypeMap>;
