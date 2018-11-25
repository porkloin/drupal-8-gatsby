import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogTeaser from '../components/BlogTeaser.js'

const BlogPage = ( { data } ) => (
  <Layout>
    <h1>Blog</h1>
    {data.allNodeArticle.edges.map((post) => (
      <BlogTeaser
        slug={post.node.fields.slug}
        key={post.node.id}
        title={post.node.title}
        summary={post.node.body.summary.length > 0 ? post.node.body.summary : post.node.body.processed.substring(0, 300)}
      />
    ) )}
  </Layout>
)

export const query = graphql`
  query BlogPageQuery {
    allNodeArticle {
      edges {
        node {
          fields {
            slug
          }
          id
          title
          body {
            processed
            summary
          }
        }
      }
    }
  }
`

export default BlogPage



