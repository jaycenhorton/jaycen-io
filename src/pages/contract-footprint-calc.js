import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Calculator = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const [footprint, setFootprint] = React.useState(null)
  const [address, setAddress] = React.useState(
    "0xbbbd7aebd29360a34cea492e012b9a2119ded306"
  )
  const [startDate, setStartDate] = React.useState("2015-01-01")
  const [endDate, setEndDate] = React.useState("2021-07-12")
  const [isLoading, setIsLoading] = React.useState(false)
  const onSubmit = async e => {
    console.log("onsubmit")
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await (
        await fetch(
          "https://us-central1-nori-website-test.cloudfunctions.net/blockchain_footprint",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Request-Method": "POST",
              Accept: "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
              args: { contract: address },
              start_date: startDate,
              end_date: endDate,
            }),
          }
        )
      ).json()
      setFootprint(res)
    } catch (e) {
      console.error(e)
      setFootprint(e.message)
    }
    setIsLoading(false)
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ethereum Contract Footprint Calculator" />
      <h1>Ethereum Contract Footprint Calculator</h1>
      <form onSubmit={onSubmit}>
        <label for="address">Contract address:</label>
        <br />
        <input
          type="text"
          id="address"
          placeholder="0xbbbd7aebd29360a34cea492e012b9a2119ded306"
          value={address}
          onChange={e => setAddress(e.target.value)}
        ></input>
        <br />
        <br />
        <label for="address">Start Date (YYYY-MM-DD):</label>
        <br />
        <input
          type="text"
          id="start-date"
          placeholder="2017-01-01"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        ></input>
        <br />
        <br />
        <label for="address">End Date (YYYY-MM-DD):</label>
        <br />
        <input
          type="text"
          id="end-date"
          placeholder="2021-07-12"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        ></input>
        <br />
        <br />
        <input type="submit"></input>
      </form>
      <div>
        Footprint: <br />
        {isLoading ? (
          "loading..."
        ) : footprint && typeof footprint === "object" ? (
          <>
            <b>{`${footprint.data[0].kgco2 / 1000} Tonnes of CO2`}</b>
            <br />
            <Link
              to={`https://nori.com/remove-carbon/checkout?tonnes=${
                footprint.data[0].kgco2 / 1000
              }`}
            >
              Click here to offset the entire footprint
            </Link>
          </>
        ) : (
          footprint
        )}
      </div>
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

export default Calculator

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
