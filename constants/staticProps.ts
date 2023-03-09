import { PageMeta } from '../types/next';
import { Config } from '../constants/config';

export const GENERIC_TITLE =
  'Green Aid Investment Fund - Invest in a net-zero future';
export const GENERIC_DESCRIPTION =
  'Green Aid is an investment fund focused on accelerating private sector investments into high-impact nature-based solutions globally.';
export const GENERIC_IMAGE = '/img/splash.png';
export const PAGE_META_BASE: Pick<PageMeta, 'domain' | 'type'> = {
  domain: Config.Domain,
  type: 'website',
};
