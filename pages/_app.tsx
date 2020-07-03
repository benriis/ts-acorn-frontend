import { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import { StoreProvider } from '../src/userContext'
import 'highlight.js/styles/default.css';
import '../styles/index.scss'
import '../styles/mde/styles.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}

export default MyApp
