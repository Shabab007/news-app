'use client'
import { Providers } from '@/lib/providers'
import './styles/globals.css'
import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry'
import AppBarHeader from './components/AppBar/AppBar'
import { Container } from '@mui/material'
import Header from './components/Header/Header'
import CategoryTabs from './components/CategoryTabs/CategoryTabs'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang='en'>
        <body>
          <Container maxWidth='xl'>
            <ThemeRegistry options={{ key: 'mui-theme' }}>
              <Header />
              <CategoryTabs />
              <main>{props.children}</main>
            </ThemeRegistry>
          </Container>
        </body>
      </html>
    </Providers>
  )
}
