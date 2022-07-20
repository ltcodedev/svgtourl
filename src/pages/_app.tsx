import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Layout from '../components/layout';
import themeFile from '../assets/theme.json';
import GlobalStyle from '../components/globalstyles';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
    ...themeFile.colors
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
