import { PAGE_META_BASE } from '../constants';
import { Config } from '../constants/config';
import { PageMeta } from '../types/next';

export const getPageMeta = (
	meta: Omit<PageMeta, 'domain' | 'type'>
): PageMeta => {
	const url = `${Config.Domain}${meta.url}`;

	return {
		...PAGE_META_BASE,
		...meta,
		url
	};
};
