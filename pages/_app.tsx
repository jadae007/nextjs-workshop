import React from 'react'
import App from "next/app"
import type { AppProps} from 'next/app'


type Props = {}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>

  <Component {...pageProps} />
  </>
  )
}
