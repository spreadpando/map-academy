import Head from 'next/head'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../themes/themeAlpha'
import GlobalStyle from '../themes/globalStyle'
import NavBar from '../src/NavBar'
import Footer from '../src/Footer'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' />
          <link href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Open+Sans&family=Playfair+Display&display=swap' rel='stylesheet' />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>
    )
  }
}
