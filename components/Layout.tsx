import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NavBar from './common/NavBar/NavBar'
import Footer from './common/Footer/Footer'

type Props = {
  children?: ReactNode
  title?: string
  metas?: any
}

const Layout = ({ children, title = 'This is the default title', metas }: Props) => (
  <div>
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="description" content={metas?.meta_data?.seo_metas__meta_title} />
      <meta name="keywords" content={metas?.meta_data?.home_meta_tags} />


    </Head>
    <header>
      <NavBar items="NavBarTextProp"></NavBar>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <Footer></Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
