import Layout from '../components/Layout'
import Seo from '../components/seo'
import DisplayPosts from '../components/DisplayPosts'
import Header from '../components/Header'
import Profile from '../components/Profile'
import React from 'react'
import { graphql } from 'gatsby'
import Pagination from '../components/Pagination'

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  console.log('currentpage:', currentPage)
  console.log(numPages)
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <Profile />
      <DisplayPosts allPosts={postList} />
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
