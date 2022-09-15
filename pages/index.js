import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layout'
import { ListItems } from '../components/listitems'
import styles from '../styles/Home.module.css'

export default function Home() {
  var listItemshomePage = ['Cabage', 'Potato', 'Onion']
  return (
    <Layout>
      <div>
        <p>Page 1</p>
        <ListItems list={listItemshomePage} />
      </div>
    </Layout>
  )
}
