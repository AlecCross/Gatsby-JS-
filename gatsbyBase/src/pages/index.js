import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>
          Welcome to <b>Gatsby!</b>
        </h1>
        <div className={styles.intro}>
          {
            nodes.map(post => {
              const { category, title, url } = post.frontmatter
              return <div key={title}>
                <Link
                  style={{ marginRight: 6 }}
                  key={title}
                  to={`/${category}/${url}`}
                >
                  {title}
                </Link>
              </div>
            })
          }
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
      query MainPage{
        allMarkdownRemark {
          nodes {
            frontmatter {
              category
              title
              url
            }
          }
        }
      }
`
