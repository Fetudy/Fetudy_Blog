import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fetudy</title>
        <meta name="description" content="Fetudy, 프론트앤드 스터디의 CS 지식 블로그입니다."/>  
        <meta name="keywords" content="Fetudy, CS , front-end , study , javascript"/>
        <meta name="google-site-verification" content="FwAppLiDquICv1Y6b9kG5dDvCV95kjtxLymjHBciUw8" />
      </Head>

      <Header />

      <main className="py-14">
        <Component {...pageProps} />
      </main>
    </Auth0Provider>
  )
}
