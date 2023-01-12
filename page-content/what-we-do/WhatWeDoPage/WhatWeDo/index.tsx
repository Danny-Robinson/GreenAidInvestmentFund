import { Container } from '@mui/material';
import Image from 'next/image';
import { Box, BoxProps } from '../../../../components/Box';
import { Txt } from '../../../../components/Txt';
import { WorkflowDesktop } from '../../../../components/Workflow/Desktop';
import { WorkflowMobile } from '../../../../components/Workflow/Mobile';
import {
	breakpoints,
	colors,
	txtProps
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
						mb={10}
						textAlign="center"
					>
						What we do
					</Txt>
					<Box
						pt={4}
						display="flex"
						justifyContent="center"
						height="100%"
						width="100%"
					>
						{isSm ? (
							<WorkflowMobile />
						) : (
							<WorkflowDesktop width="100%" />
						)}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
