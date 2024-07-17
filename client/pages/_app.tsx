import type { AppProps } from 'next/app'
import '@dotlottie/react-player/dist/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}