import LinkBehavior from '@components/link-behavior';
import type { LinkProps } from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#EEE', // Gris principal
    },
    secondary: {
      main: '#ff5428', // Orange secondaire
    },
    background: {
      default: '#1e1e1e', // Couleur de fond par défaut
      paper: '#222222', // Couleur de fond des conteneurs
    },
    text: {
      primary: '#ffffff', // Couleur de texte principale
      secondary: '#cccccc', // Couleur de texte secondaire
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 14,
    // Personnalisez d'autres styles de typographie selon vos besoins
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as unknown as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default theme;
