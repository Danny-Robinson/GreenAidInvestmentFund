import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styled from '@emotion/styled';
import { FC } from 'react';
import { LinkProps as MuiLinkProps } from '@mui/material/Link';
import dynamic from 'next/dynamic';

const MuiLink = dynamic(() => import('@mui/material/Link'), {
	ssr: false
});

export type LinkProps = NextLinkProps & {
	linkProps?: MaterialLinkProps;
	children: MaterialLinkProps['children'];
	external?: boolean;
	newTab?: boolean;
};

export interface MaterialLinkProps extends Omit<MuiLinkProps, 'underline'> {
	underline?: 'none' | 'always' | 'hover' | 'never';
}

const getUnderlineProperties = (underline: MaterialLinkProps['underline']) =>
	underline === 'never'
		? `text-decoration: none; &:hover { text-decoration: none; }`
		: '';

export const MaterialLink = styled(MuiLink as FC<MaterialLinkProps>, {
	shouldForwardProp: (prop: string) => !['underline'].includes(prop)
})`
	${(props: MaterialLinkProps) => `
        ${getUnderlineProperties(props.underline)}
    `}
`;

export const Link = ({
	linkProps,
	children,
	external,
	newTab,
	...link
}: LinkProps) => {
	if ((external || newTab) && typeof link.href === 'string') {
		return (
			<MaterialLink
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				role="link"
				{...(linkProps || {})}
			>
				{children}
			</MaterialLink>
		);
	}

	return (
		<NextLink {...link}>
			<MaterialLink {...(linkProps || {})}>{children}</MaterialLink>
		</NextLink>
	);
};
