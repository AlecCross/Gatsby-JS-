import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"


const SinglePost = ({ data }) => {
    const { html } = data.markdownRemark
    const { title } = data.markdownRemark
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="404: Not Found" />

export default SinglePost

export const query = graphql`
    query PostQuery($url: String) {
        markdownRemark(frontmatter: { url: { eq: $url } }) {
            html
        frontmatter {
                title
                url
                category
            }
        }
    }
`