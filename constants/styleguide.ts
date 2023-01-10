import { fontWeight, lineHeight } from '@mui/system';
import { TxtProps } from '../components/Txt';

export const colors = {
	Black: '#0E2819',
	Green1: '#155932',
	Green2: '#93C330',
	Green3: '#C9E873',
	Green4: '#E4FFB5',
	White: '#FCFCF7'
};

export const txtProps = {
	title: {
		fontSize: {
			xs: '28px',
			sm: '32px'
		},
		lineHeight: {
			xs: '36px',
			sm: '40px'
		},
		fontWeight: 600
	},
	headline1: {
		fontSize: {
			xs: '20px',
			sm: '24px'
		},
		lineHeight: {
			xs: '28px',
			sm: '32px'
		},
		fontWeight: 600
	},
	headline2: {
		fontSize: {
			xs: '14px',
			sm: '16px'
		},
		lineHeight: {
			xs: '20px',
			sm: '22px'
		},
		fontWeight: 600
	},
	body1: {
		fontSize: {
			xs: '16px',
			sm: '18px'
		},
		lineHeight: {
			xs: '24px',
			sm: '26px'
		},
		fontWeight: 450
	},
	body2: {
		fontSize: {
			xs: '14px',
			sm: '16px'
		},
		lineHeight: {
			xs: '20px',
			sm: '22px'
		},
		fontWeight: 450
	},
	body3: {
		fontSize: {
			xs: '12px',
			sm: '14px'
		},
		lineHeight: {
			xs: '16px',
			sm: '18px'
		},
		fontWeight: 450
	}
};

export const zIndex = {
	One: 1,
	Two: 2,
	Three: 3,
	AlwaysTop: 9999
};

export const breakpoints = {
	values: {
		xs: 0,
		sm: 730,
		md: 1090,
		lg: 1280,
		xl: 1920
	}
};
