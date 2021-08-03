import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  display: flex;

  &:hover {
    color: var(--link) !important;
  }
  margin-bottom: 4rem;
`

export const PostItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* align-items: center; */
`

// export const PostItemInfo = styled.div``

export const PostItemDate = styled.time`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`

export const PostItemTitle = styled.h1`
  color: var(--link);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const PostItemDescription = styled.p`
  /* font-size: 1rem; */
  font-weight: 300;
  /* line-height: 1.2; */
`
