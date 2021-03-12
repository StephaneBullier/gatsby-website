import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import {Link} from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>Web developer based in Montpellier.</p>
          <Link className={styles.btn} to="/projets">Mon portfolio</Link>
        </div>
        <img src="banner.png" alt=""/>
      </section>
    </Layout>
  )
}
