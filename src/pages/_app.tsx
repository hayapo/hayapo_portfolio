import "styles/globals.css"
import "styles/tailwind.css"
import type { AppProps } from "next/app"
import Layout from "Layout/Layout"
import HpHead from "components/Head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <HpHead />
    </Layout>
  )
}

export default MyApp
