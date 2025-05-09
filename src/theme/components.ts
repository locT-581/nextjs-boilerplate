import type { Theme } from '@mui/material';
import type { Components, CssVarsTheme } from '@mui/material/styles';

export const components:
  | Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>
  | undefined = {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          fontFamily: 'inherit',
          color: 'inherit',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.title03,
          textTransform: 'none',
          padding: theme.spacing(1, 2),
          minHeight: 0,
        }),
        endIcon: ({ theme }) => ({
          marginLeft: theme.spacing(0.5),
        }),
      },
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: ({ theme }) => ({
            ...theme.typography.title03,
            textTransform: 'none',
            padding: theme.spacing(1, 2),
            minHeight: 0,
            borderRadius: 8,
          }),
        },
        {
          props: { variant: 'text' },
          style: ({ theme }) => ({
            ...theme.typography.supportButton,
            textTransform: 'none',
            padding: theme.spacing(0),
            minWidth: 32,
          }),
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderRadius: 16,
          boxShadow: 'none',
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(0),
        }),
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(0),
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 999,
          backgroundColor: theme.palette.negative.main,
        }),
        bar: ({ theme }) => ({
          borderRadius: 999,
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
  };
