/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <>
      <div
        style={{
          display: `flex`,
        }}
      >
        <p>
          A blog by <strong>{author.name}</strong>. {author.summary}
        </p>
      </div>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
        </p>
      </div>
    </>
  )
}

export default Bio
