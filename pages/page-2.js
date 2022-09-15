import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layout'
import { ListItems } from '../components/listitems'
import styles from '../styles/Home.module.css'

export default function PageTwo() {
    var listItemshomePage = ['Katleho','Mpumelelo','Cliff', 'Titus']
  return (
    <Layout>

        <div>
            <p>Page 2</p>
        </div>

        <ListItems list={listItemshomePage}></ListItems>

    </Layout>
  )
}
