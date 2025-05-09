'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material/styles';
import { theme } from '.';

export type IThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: IThemeProviderProps) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>
    </AppRouterCacheProvider>
  );
}
