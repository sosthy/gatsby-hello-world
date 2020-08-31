import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <Header headerText={`About ${data.site.siteMetadata.title}`} />
      <p>Such wow. Very React.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
