/* eslint-disable ts/consistent-type-definitions */

import type { Palette } from '@mui/material';
import type { TypographyVariantsOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title01: React.CSSProperties;
    title02: React.CSSProperties;
    title03: React.CSSProperties;
    content02: React.CSSProperties;
    content01: React.CSSProperties;
    supportLabel: React.CSSProperties;
    supportButton: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    title01?: React.CSSProperties;
    title02?: React.CSSProperties;
    title03?: React.CSSProperties;
    content02?: React.CSSProperties;
    content01?: React.CSSProperties;
    supportLabel?: React.CSSProperties;
    supportButton?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title01: true;
    title02: true;
    title03: true;
    content02: true;
    content01: true;
    supportLabel: true;
    supportButton: true;
    h3: false;
  }
}

export const typography: TypographyVariantsOptions | ((palette: Palette) => TypographyVariantsOptions) = {
  fontFamily: '"Urbanist", Helvetica',
  fontSize: 16,
  content01: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '0px',
    fontStyle: 'normal',
  },
  supportLabel: {
    fontSize: '10px',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '0px',
    fontStyle: 'normal',
  },
  title01: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: 1.4,
    letterSpacing: '0px',
    fontStyle: 'normal',
  },
  // Map the content02 typography to body2 for use in the component
  body2: {
    fontFamily: '"Urbanist", Helvetica',
    fontSize: '11px',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.44px',
    fontStyle: 'normal',
  },
};
