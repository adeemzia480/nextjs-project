// import '@/styles/globals.scss';
import 'aos/dist/aos.css';
import 'normalize.css';
import './common.css';
import './fonts.css';
// antd
import 'antd/dist/antd.css';
import 'swiper/css';

import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  <div>
    <Script src="https://cdn.jsdelivr.net/gh/px2code/posize/build/v1.00.3.js" />
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
  </div>

  return <Component {...pageProps} />
}
