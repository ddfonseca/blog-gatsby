import styled from 'styled-components'
import { Link } from 'gatsby'

export const SearchLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  display: flex;

  &:hover {
    color: var(--link) !important;
  }
`

export const TituloWrapper = styled.section`
  margin: 2.1rem 0;
  display: flex;
  justify-content: space-between;
  color: var(--text);
`

export const Titulo = styled.h1`
  font-size: ${(props) => (props.post ? '1.3rem' : '1.5rem')};
  /* color: var(--link); */
  /* color: white; */

  &:hover {
    color: var(--link) !important;
  }
`
export const Bloco2 = styled.div`
  display: flex;
`

export const Search = styled.div`
  margin-right: 3rem;
  width: 1.5rem;
`

export const Theme = styled.div`
  width: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    color: var(--link);
  }
`

export const MenuBarItem = styled.span``
