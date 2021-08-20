import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import PostItem from '../PostItem'
import * as S from './styled'

const DisplayPosts = ({ allPosts }) => {
  return (
    <S.DisplayPostsWrapper>
      {allPosts.map(
        ({
          node: {
            frontmatter: { date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            // category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </S.DisplayPostsWrapper>
  )
}

export default DisplayPosts
