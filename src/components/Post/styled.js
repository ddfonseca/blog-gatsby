import styled from 'styled-components'

import { Link } from 'gatsby'

export const PostLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  display: flex;

  &:hover {
    color: var(--link) !important;
  }
`

export const PostTopBar = styled.section``
export const PostSite = styled.p``
export const PostHeader = styled.header``
export const PostTitle = styled.h1`
  color: var(--link);
`
export const PostDescription = styled.h2``
export const PostDate = styled.p`
  font-size: 0.85rem;
`
export const MainContent = styled.section`
  h2 {
    font-size: 1.6rem;
    color: var(--h2);
  }

  h3 {
    font-size: 1.4rem;
    color: var(--h3);
  }

  h4 {
    font-size: 1.3rem;
    color: var(--h4);
  }

  h5 {
    font-size: 1.2rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 140%;
    /* letter-spacing: 0.02rem; */
  }

  a {
    color: inherit;
    color: var(--link);

    &:hover {
      text-decoration: none;
    }
  }

  b,
  strong {
    color: var(--link);
  }
`
