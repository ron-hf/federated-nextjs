import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// project imports
import componentStyleOverrides from './override';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization: any) => {

  const themeOption = {
    heading: grey[900],
    darkTextPrimary: grey[700],
    darkTextSecondary: grey[500],
    textDark: grey[900],
    divider: grey[200],
    customization
  };

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption)
  };

  const themes = createTheme();
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;