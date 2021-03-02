// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'primary.50',
        color: 'primary.900',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      },
    },
  },
  useSystemColorMode: false,
  colors: {
    primary: {
      50: 'hsl(228, 90%, 99%)',
      100: 'hsl(228, 79%, 95%)',
      200: 'hsl(228, 79%, 69%)',
      300: 'hsl(228, 89%, 57%)',
      400: 'hsl(228, 100%, 44%)',
      500: 'hsl(228, 92%, 35%)',
      600: 'hsl(228, 100%, 27%)',
      700: 'hsl(228, 100%, 20%)',
      800: 'hsl(228, 100%, 13%)',
      900: 'hsl(228, 100%, 4%)',
    },
    secondary: {
      50: 'hsl(347, 79%, 93%)',
      100: 'hsl(347, 79%, 87%)',
      200: 'hsl(347, 79%, 75%)',
      300: 'hsl(347, 89%, 57%)',
      400: 'hsl(347, 100%, 44%)',
      500: 'hsl(347, 92%, 35%)',
      600: 'hsl(347, 100%, 27%)',
      700: 'hsl(347, 100%, 20%)',
      800: 'hsl(347, 100%, 13%)',
      900: 'hsl(347, 100%, 4%)',
    },
    secondaryAlpha: {
      50: 'hsla(347, 99%, 99%, 0.9)',
      100: 'hsla(347, 79%, 87%, 0.7)',
      200: 'hsla(347, 79%, 69%, 0.7)',
      300: 'hsla(347, 89%, 57%, 0.7)',
      400: 'hsla(347, 100%, 44%, 0.7)',
      500: 'hsla(347, 92%, 35%, 0.7)',
      600: 'hsla(347, 100%, 27%, 0.8)',
      700: 'hsla(347, 100%, 20%, 0.7)',
      800: 'hsla(347, 100%, 13%, 0.7)',
      900: 'hsla(347, 100%, 4%, 0.15)',
    },
    alpha: {
      50: 'hsla(228, 99%, 99%, 0.9)',
      100: 'hsla(228, 79%, 87%, 0.7)',
      200: 'hsla(228, 79%, 69%, 0.7)',
      300: 'hsla(228, 89%, 57%, 0.7)',
      400: 'hsla(228, 100%, 44%, 0.7)',
      500: 'hsla(228, 92%, 35%, 0.7)',
      600: 'hsla(228, 100%, 27%, 0.8)',
      700: 'hsla(228, 100%, 20%, 0.7)',
      800: 'hsla(228, 100%, 13%, 0.7)',
      900: 'hsla(228, 100%, 4%, 0.15)',
    },
  },
  components: {
    Button: {
      variants: {
        contrast: {
          bgGradient: 'linear(to-r, primary.400, secondary.400)',
          color: 'alpha.50',
          borderRadius: 'md',
          px: '48px',
          py: '4px',
          _hover: {
            bgGradient: 'linear(to-r, primary.500, secondary.500)',
          },
        },
        contrastReverse: {
          bgGradient: 'linear(to-l, primary.400, secondary.400)',
          color: 'alpha.50',
          borderRadius: 'md',
          px: '48px',
          py: '4px',
          _hover: {
            bgGradient: 'linear(to-l, primary.500, secondary.500)',
          },
        },
      },
    },
  },
});

export default theme;
