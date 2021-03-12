import React from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/projets.module.css'

export default function Projets() {
    return (
      <Layout>
        <div className={styles.portfolio}>
          <h2>Mes projets</h2>
          <h3>Projets et sites web</h3>
        </div>
      </Layout>
    )
}
