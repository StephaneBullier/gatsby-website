import React from 'react'
import Layout from '../components/Layout';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import * as styles from '../styles/project-details.module.css'
import {graphql} from 'gatsby';

export default function ProjectDetails ({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg} = data.markdownRemark.frontmatter
  const image = getImage(featuredImg)
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage alt="test" image={image} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Project($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
