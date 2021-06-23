import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>Homepage</h2>
      <hr />
      <Link href="/"><a>about</a></Link><br />
      <Link href="/ninjas"><a>Ninjas List</a></Link>
    </div>
  )
}
