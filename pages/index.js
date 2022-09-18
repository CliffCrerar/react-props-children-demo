import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layout'
import { ListItems } from '../components/listitems'
import styles from '../styles/Home.module.css'

export default function Home() {
  var listItemshomePage = ['Cabage', 'Potato', 'Onion']
  return (
    <Layout>
      
        <h1>Home Page</h1>
        
        <ListItems heading="Veggies" list={listItemshomePage} />
      
    </Layout>
  )
}
