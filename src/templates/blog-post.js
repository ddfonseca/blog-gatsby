import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Header from '../components/Header'
import RecommendedPosts from '../components/RecommendedPosts'

import * as S from '../components/Post/styled'
import '../components/Post/styled.css'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <S.PostTopBar />
      <Header post />
      {/* <S.PostLink to="/">
        <Header post />
      </S.PostLink> */}
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDate>
          <S.Time /> {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        {/* <S.PostDescription>{post.frontmatter.description}</S.PostDescription> */}
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
