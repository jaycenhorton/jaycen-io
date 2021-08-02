import React from "react"
import { Calculator } from "../components/eth-footprint"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const EthFootprintPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ethereum Footprint Calculator" />
      <h1>Ethereum Footprint Calculator</h1>
      <Calculator />
      <div>
        <h6>
          You can find more about this calculator's underlying methodology{" "}
          <Link to="https://github.com/kylemcdonald/ethereum-nft-activity">
            here
          </Link>
          . This calculator is made possible by the outstanding work described
          there.
        </h6>
      </div>
    </Layout>
  )
}

export default EthFootprintPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
