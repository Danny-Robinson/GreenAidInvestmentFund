import { Container } from '@mui/material';
import Image from 'next/image';
import { Box, BoxProps } from '../../../../components/Box';
import { Txt } from '../../../../components/Txt';
import {
	breakpoints,
	colors,
	txtProps
} from '../../../../constants/styleguide';
import { useMobile } from '../../../../utils/useMobile';

export interface WhatWeDoProps extends BoxProps {}

export const WhatWeDo = ({ ...restProps }: WhatWeDoProps) => {
	const isXs = useMobile('xs');

	return (
		<Box bgcolor={colors.Green1} pt={10} {...restProps}>
			<Container>
				<Box display="flex" flexDirection="column" alignItems="center">
					<Txt {...txtProps.title} color={colors.White}>
						What we do
					</Txt>
					<Box
						width={{
							xs: '80vw',
							sm: '60vw',
							md: 'calc(35vw + 100px)'
						}}
						height={{
							xs: '200vh',
							sm: '80vw',
							md: 'calc(35vw + 100px)'
						}}
						position="relative"
						my={8}
					>
						<Image
							src={
								isXs
									? '/img/workflow-mobile.png'
									: '/img/workflow-desktop.png'
							}
							alt="workflow"
							fill
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
