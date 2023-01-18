import { GetStaticProps } from 'next';
import {
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  GENERIC_TITLE,
  Routes,
} from '../../../constants';
import { PageMeta } from '../../../types/next';
import { getPageMeta } from '../../../utils/getPageMeta';
import { Founders } from '../Founders';
import { HeroBanner } from '../HeroBanner';

export const getStaticProps: GetStaticProps<{
  meta: PageMeta;
}> = async () => {
  const title = GENERIC_TITLE;
  const description = GENERIC_DESCRIPTION;
  const image = GENERIC_IMAGE;

  return {
    props: {
      meta: getPageMeta({
        title,
        description,
        url: Routes.Home,
        image,
      }),
    },
  };
};

export const AboutUsPage = () => {
  return (
    <>
      <HeroBanner />
      <Founders />
    </>
  );
};
