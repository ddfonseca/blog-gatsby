import styled from 'styled-components'

import { Time as T } from '@styled-icons/boxicons-regular/Time'

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
  margin: 0.5rem 0;
  font-size: 0.85rem;
`
export const MainContent = styled.article`
  font-size: 1.1rem;

  img {
    &:hover {
      transform: scale(1.09, 1.09);
      transition: 0.4s;
    }
  }

  .language-text {
    padding: 0.1em 0.4em;
    border-radius: 10px;
    background-color: hsl(231deg 20% 25%);
    color: hsl(60deg 30% 96%);
  }

  .__code {
    font-size: 0.9em;
    padding: 0.9em;
    border-radius: 10px;
    border-radius: 10px;
    background-color: hsl(231deg 20% 25%);
    color: hsl(60deg 30% 96%);
  }
  h2 {
    margin: 1rem 0;
    font-size: 1.6rem;
    /* color: var(--h2); */
  }

  h3 {
    font-size: 1.4rem;
    /* color: var(--h3); */
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
    line-height: 150%;
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

  ul {
    /* list-style: none; */
  }

  ul > li {
    margin-left: 2rem;
    line-height: 160%;
  }
`

export const Time = styled(T)`
  width: calc(16px * 0.85);
`
