import Head from 'next/head'
import { ReactNode } from 'react'
import Layout, { siteTitle } from '../components/layout/layout'

export default function Home({ children }: { children: ReactNode }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        {children}
      </main>
    </Layout>
  )
}
