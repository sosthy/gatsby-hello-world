import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}
