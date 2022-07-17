import '../styles/globals.css'
import Layout from '../comps/layout'
import { SSRProvider } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {

  return (
    <SSRProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SSRProvider>
  )
}

export default MyApp
