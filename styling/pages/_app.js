import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import '@/styles/global.css'

const theme = {
  colors: {
    primary: 'hsl(200, 100%, 25%)'
  }
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
