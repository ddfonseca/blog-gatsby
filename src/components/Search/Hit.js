import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
  // <>
  //   <h2>{hit.timeToRead}</h2>
  //   <h3>{hit.title}</h3>
  // </>
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    timeToRead={hit.timeToRead}
  />
)

export default Hit
