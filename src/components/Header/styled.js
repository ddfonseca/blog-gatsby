import styled from 'styled-components'
import { DarkTheme as Dark } from '@styled-icons/fluentui-system-filled/DarkTheme'
import { Search as Sear } from '@styled-icons/boxicons-regular/Search'
import { Link } from 'gatsby'

export const TituloWrapper = styled.section`
  margin: 2.1rem 0;
  display: flex;
  justify-content: space-between;
  color: var(--text);
`

export const SearchLink = styled(Link)`
  color: var(--text);
  text-decoration: none;

  &:hover {
    color: var(--link);
  }
`

export const Bloco2 = styled.div`
  display: flex;
  align-items: center;
`

export const Titulo = styled.h1`
  font-size: ${({ post }) => (post ? '1.3rem' : '1.5rem')};
  /* color: var(--link); */
  /* color: white; */

  &:hover {
    color: var(--link);
  }
`

export const Search = styled(Sear)`
  margin-right: 3rem;
  width: 1.5rem;
  height: 1.5rem;
  align-self: end;
`

export const DarkTheme = styled(Dark)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    color: var(--link);
  }
`
export const MenuBarItem = styled.span``
