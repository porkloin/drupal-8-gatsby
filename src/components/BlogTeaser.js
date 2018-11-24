import React from 'react'

const BlogTeaser = ( {title, summary} ) => (
  <div className="blog--teaser">
    <h2>{title}</h2>
    <p>{summary}</p>
  </div>
)

export default BlogTeaser

