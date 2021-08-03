import styled from 'styled-components'
import { Link } from 'gatsby'

export const RecommendedWrapper = styled.section`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
`

export const RecommendedLink = styled(Link)`
  color: var(--pagination);
  text-decoration: none;

  &:hover {
    /* color: #d7befb; */
    opacity: 0.5;
  }

  &.previous {
  }

  &.next {
    margin-left: auto;
  }

  &.previous:before {
  }

  &.next:after {
  }
`
