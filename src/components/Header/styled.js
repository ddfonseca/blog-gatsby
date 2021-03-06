import styled, { css } from 'styled-components'
import { Search as Sear } from '@styled-icons/boxicons-regular/Search'
import { Link } from 'gatsby'
import { Moon } from '@styled-icons/heroicons-solid/Moon'
import { Document } from '@styled-icons/fluentui-system-filled/Document'
import { ContactPage } from '@styled-icons/material/ContactPage'

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

export const Titulo = styled.h1`
  font-size: ${({ post }) => (post ? '1.3rem' : '1.5rem')};
  font-family: 'Merriweather';

  /* font-family: 'Inconsolata', monospace; */
  /* color: var(--link); */
  /* color: white; */

  &:hover {
    color: var(--link);
  }
`
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`

const cssIconBase = css`
  width: 1.5rem;
  height: 1.5rem;
`

export const ContactIcon = styled(ContactPage)`
  ${cssIconBase}
`

export const Search = styled(Sear)`
  ${cssIconBase}
`
export const DarkTheme = styled(Moon)`
  ${cssIconBase}

  &:hover {
    cursor: pointer;
    color: var(--link);
  }
`

export const Portfolio = styled(Document)`
  ${cssIconBase}
`

export const MenuBarItem = styled.span``
