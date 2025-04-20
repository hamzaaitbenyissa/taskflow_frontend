/**
 * This file defines the RootLayout component, which sets up the global layout for the application.
 * It includes providers for React Query, MUI theme, and App Router Cache.
 */

import './globals.css'
import ReactQueryProvider from '@/lib/react-query-provider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { MuiThemeProvider } from '@/lib/muiThemeProvider/muiThemeProvider'

/**
 * RootLayout component that sets up the global layout for the application.
 *
 * @param children - The child components to be rendered within the layout.
 * @returns The RootLayout component with the provided children.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
