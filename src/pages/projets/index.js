import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import * as projectsStyles from '../../styles/projets.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const email = data.contact.siteMetadata.email

  return (
    <Layout>
      <div className={projectsStyles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projets & sites web que j'ai créé</h3>
        <div className={projectsStyles.projects}>
          {projects.map(project => (
            <Link to={"/projets/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage alt={project.frontmatter.title} image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Vous aimez ce que vous voyez ? Contactez moi à cette adresse : {email}</p>
      </div>
    </Layout>
  );
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        email
      }
    }
  }
`
