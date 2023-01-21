import { GetStaticProps } from 'next';
import {
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  GENERIC_TITLE,
  Routes,
} from '../../../constants';
import { PageMeta } from '../../../types/next';
import { getPageMeta } from '../../../utils/getPageMeta';
import { Contact } from '../Contact/indext';
import { HeroBanner } from '../HeroBanner';
import { JoinOurTeam } from '../JoinOurTeam';

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

export const ContactUsPage = () => {
  return (
    <>
      <HeroBanner />
      <Contact />
      <JoinOurTeam />
    </>
  );
};
