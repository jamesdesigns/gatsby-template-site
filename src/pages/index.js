import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DownLoadsPage from "../components/downloads"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is Gatsby!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <DownLoadsPage className="flex" />

    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
