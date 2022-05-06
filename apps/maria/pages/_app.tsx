import { AppProps } from 'next/app'

import { Layout } from '@maria/core'

import '../styles/global.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default CustomApp
