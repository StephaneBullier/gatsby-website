import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import {graphql, Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>Web developer based in Montpellier.</p>
          <Link className={styles.btn} to="/projets">Mon portfolio</Link>
        </div>
        <GatsbyImage alt="test" image={image} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
