import { ThemeOptions } from '@mui/material';

import {
    customShadowFields,
    customShapeFields,
    customSpacingFields,
    customMuiCalendarStyles,
    customMuiPopoverStyles,
    customMuiDrawerStyles,
    customMuiDialogStyles,
} from './override';
import lightPalette from './palette';

export const theme: ThemeOptions = {
    palette: lightPalette,
    typography: {
        fontFamily: ['-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
        fontWeight: 600,
        // Custom typography fields are not supported in material-ui V4,
        // We can use styles which defined in the default theme https://next.material-ui.com/ru/customization/default-theme/
        grandiose: {
            fontWeight: 500,
            fontSize: '56px',
            lineHeight: '72px',
        },
        bodyLarge: {
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '32px',
        },
        bodyLargeStrong: {
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '32px',
        },
        bodyText: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
        },
        bodyTextShort: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px',
        },
        bodyTitle: {
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
        },
        smallText: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
        },
        smallTextStrong: {
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '20px',
        },
        microText: {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
        },
        microTextStrong: {
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
        },
        cta: {
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '20px',
            cursor: 'pointer',
            textAlign: 'center',
        },
        navDefault: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            cursor: 'pointer',
        },
        navStrong: {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            cursor: 'pointer',
        },
        label: {
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
            cursor: 'pointer',
            textTransform: 'uppercase',
        },
        link: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            textDecoration: 'underline',
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'none',
            },
        },
        linkSmall: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            textDecoration: 'underline',
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'none',
            },
        },
    },
    shape: {
        borderRadius: 4,
        ...customShapeFields,
    },
    components: {
        ...customMuiCalendarStyles,
        ...customMuiPopoverStyles,
        ...customMuiDrawerStyles,
        ...customMuiDialogStyles,
    },
    ...customShadowFields,
    ...customSpacingFields,
};
