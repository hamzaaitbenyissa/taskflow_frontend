import theme from './mui-theme'

import { ThemeProvider } from '@mui/material/styles'

import type { FC, PropsWithChildren } from 'react'

export const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
