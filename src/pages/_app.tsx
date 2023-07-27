import '<dotiweb>/styles/globals.css'
import type { AppProps } from 'next/app'
import { Work_Sans } from '@next/font/google'

const workSans = Work_Sans ({
  subsets: [],
  weight: '400'
})


export default function App({ Component, pageProps,  }: AppProps) {
  return <Component {...pageProps} />
}
