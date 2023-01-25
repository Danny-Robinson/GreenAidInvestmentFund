import { Divider, Grid } from '@mui/material';
import { Animate } from '../../../../components/Animate';
import { Box, BoxProps } from '../../../../components/Box';
import { Button } from '../../../../components/Button';
import { Txt } from '../../../../components/Txt';
import { colors, txtProps } from '../../../../constants/styleguide';

export interface CurrentOpeningsProps extends BoxProps {}

interface OpeningProps extends BoxProps {
  title: string;
  description: string;
  link: string;
}

export const Opening = ({
  title,
  description,
  link,
  ...restProps
}: OpeningProps) => {
  return (
    <Box {...restProps}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Txt {...txtProps.headline1} color={colors.White}>
            {title}
          </Txt>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Txt {...txtProps.body2} color={colors.White}>
            {description}
          </Txt>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box display="flex" justifyContent={{ xs: 'start', sm: 'end' }}>
            <Button external href={link}>
              Apply
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const OPENINGS = [
  {
    title: 'Job title here',
    description:
      'Short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis felis id nunc fringilla iaculis. Sed sed odio nec urna molestie aliquam. Vivamus elit eli',
    link: 'https://www.google.com',
  },
  {
    title: 'A complicated job title',
    description:
      'Short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis felis id nunc fringilla iaculis. Sed sed odio nec urna molestie aliquam. Vivamus elit eli',
    link: 'https://www.google.com',
  },
];

export const CurrentOpenings = ({ ...restProps }: CurrentOpeningsProps) => {
  return (
    <Box
      bgcolor={colors.Green1}
      borderRadius="25px"
      py={8}
      px={{ xs: 5, md: 15 }}
      {...restProps}
    >
      <Animate>
        <Txt {...txtProps.title} color={colors.White} textAlign="center" mb={7}>
          Current Openings (demo)
        </Txt>
      </Animate>
      {OPENINGS.map((opening, index) => {
        return (
          <Animate key={`${opening.title}-${index}`}>
            <Opening {...opening} />
            {index !== OPENINGS.length - 1 && (
              <Box component={Divider} bgcolor={colors.White} my={5} />
            )}
          </Animate>
        );
      })}
    </Box>
  );
};
