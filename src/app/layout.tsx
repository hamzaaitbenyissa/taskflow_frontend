import './globals.css'
import ReactQueryProvider from '@/lib/react-query-provider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { MuiThemeProvider } from '@/lib/muiThemeProvider/muiThemeProvider'

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
