import React from 'react'

const BlogTeaser = ( {title, summary} ) => (
  <div className="blog--teaser">
    <h2>{title}</h2>
    <p dangerouslySetInnerHTML={{__html: summary}} />
  </div>
)

export default BlogTeaser

