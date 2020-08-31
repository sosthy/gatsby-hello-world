import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: 650,
        padding: `0 1rem`,
        color: "purple",
      }}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      {children}
    </div>
  )
}
