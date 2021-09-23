import styled from 'styled-components'
import media from 'styled-media-query'

export const PortfolioWrapper = styled.main``

export const Row = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  ${media.greaterThan('520px')`
  flex-direction: row;

`}
`

export const Title = styled.h1`
  /* border: 1px solid red; */
  text-align: center;
  margin-bottom: 1rem;
`
export const List = styled.ul``
export const Item = styled.li``
