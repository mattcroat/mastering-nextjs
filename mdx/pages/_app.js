import App from 'next/app'
import { ThemeProvider, Styled } from 'theme-ui'
import { FormspreeProvider } from '@formspree/react'

import theme from '../theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <FormspreeProvider project={process.env.NEXT_PUBLIC_PROJECT_ID}>
          <Component {...pageProps} />
        </FormspreeProvider>
      </Styled.root>
    </ThemeProvider>
  )
}

export default MyApp
