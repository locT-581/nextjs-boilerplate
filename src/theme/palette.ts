/* eslint-disable ts/consistent-type-definitions */
import type { PaletteColor, PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Partial<PaletteColor>;
    positive: Partial<PaletteColor>;
    negative: Partial<PaletteColor>;
  }

  interface PaletteOptions {
    tertiary?: Partial<PaletteColor>;
    positive?: Partial<PaletteColor>;
    negative?: Partial<PaletteColor>;
  }

}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    positive: true;
    negative: true;
  }
}

export const palette: PaletteOptions = {
  tertiary: {
    main: '#ECF4E9',
  },
  positive: {
    main: '#121212',
  },
  negative: {
    main: '#FFFFFF',
  },
  error: {
    main: '#FF434E',
  },
  success: {
    main: '#1EA031',
  },
  warning: {
    main: '#EEAF00',
  },
  info: {
    main: '#29C8F0',
  },
};
