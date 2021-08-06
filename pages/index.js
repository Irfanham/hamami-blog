import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Hamami | Home</title>
        <meta name="keyword" content="hamami"/>
      </Head>
      <div>
        <h1 className={styles.title}>
          Homepage
        </h1>
        <p></p>
        <Link href="/blog">
              <a className={styles.btn}>My Blog</a>
          </Link>
      </div>
    </>
  )
}
