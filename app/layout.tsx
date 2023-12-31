'use client'
import { Providers } from '@/lib/providers'
import './styles/globals.css'
import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry'
import { Container } from '@mui/material'
import Header from './components/Header/Header'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang='en'>
        <body>
          <Container maxWidth='xl'>
            <ThemeRegistry options={{ key: 'mui-theme' }}>
              <Header />
              <main>{props.children}</main>
            </ThemeRegistry>
          </Container>
        </body>
      </html>
    </Providers>
  )
}
