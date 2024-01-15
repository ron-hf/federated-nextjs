import {
  Theme
} from '@mui/material';
export enum SPACINGS {
  XXL = 'xxl',
  xl = 'xl',
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs',
  xxs = 'xxs',
}

export const customShapeFields = {
    radius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        xl: '12px',
        full: '999px',
    },
};

// ts and mui do not work well together here as mui is expecting 25 shadow types in their theme - therefore leaving it as `any` for now.
export const customShadowFields: any = {
    shadows: [
        'none',
        'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
        'rgba(0, 0, 0, 0.15) 0px 2px 4px 0px',
        'rgba(0, 0, 0, 0.15) 0px 3px 8px 0px',
        'rgba(0, 0, 0, 0.20) 0px 4px 16px 0px',
        'rgba(0, 0, 0, 0.1) 1px 0px 3px',
        'rgba(0, 0, 0, 0.15) 2px 0px 4px',
        'rgba(0, 0, 0, 0.15) 3px 0px 8px',
        'rgba(0, 0, 0, 0.2) 4px 0px 16px',
    ],
};

const spacingValues = {
    xxl: '56px',
    xl: '40px',
    lg: '32px',
    md: '24px',
    sm: '16px',
    xs: '8px',
    xxs: '4px',
};

export const customSpacingFields = {
    setSpacing: (size: SPACINGS) =>
        Object.prototype.hasOwnProperty.call(spacingValues, size) ? spacingValues[size] : '0px',
};


export const customMuiCalendarStyles = {
    MuiCalendarPicker: {
        styleOverrides: {
            root: ({ theme }: { theme: Theme }) => ({
                backgroundColor: theme.palette.grey[300],
            }),
            viewTransitionContainer: ({ theme }: { theme: Theme }) => ({
                backgroundColor: theme.palette.grey[100],
            }),
        },
    },
};

export const customMuiPopoverStyles = {
    MuiPopover: {
        paper: {
            boxShadow: customShadowFields.shadows[1],
        },
    },
};

export const customMuiDrawerStyles = {
    MuiDrawer: {
        styleOverrides: {
            paper: ({ theme }: { theme: Theme }) => ({
                backgroundColor: theme.palette.grey[100],
            }),
        },
    },
};

export const customMuiDialogStyles = {
    MuiDialog: {
        styleOverrides: {
            paper: ({ theme }: { theme: Theme }) => ({
                backgroundColor: theme.palette.grey[100],
                backgroundImage: 'none',
            }),
        },
    },
};

export const FIELD_HEIGHT = '48px';
export const FIELD_PADDING = '12px';
