import theme from './mui-theme'

import { ThemeProvider } from '@mui/material/styles'

import type { FC, PropsWithChildren } from 'react'

/**
 * MuiThemeProvider component that wraps its children with a Material-UI ThemeProvider.
 * @param children
 * @constructor
 */
export const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
