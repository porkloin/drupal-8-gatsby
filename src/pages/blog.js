import React from 'react'

import Layout from '../components/layout'
import BlogTeaser from '../components/BlogTeaser.js'

const BlogPage = () => (
  <Layout>
    <h1>Blog</h1>
    <BlogTeaser
      title='My first great blog post'
      summary="I have so many great thoughts, I can't help but share them!"
    />
  </Layout>
)

export default BlogPage
