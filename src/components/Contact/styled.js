import styled, { css } from 'styled-components'
import { Twitter as T } from '@styled-icons/boxicons-logos/Twitter'
import { Email as E } from '@styled-icons/material-rounded/Email'
import { LinkedinSquare as L } from '@styled-icons/boxicons-logos/LinkedinSquare'

export const ContactWrapper = styled.div``

const base = css`
  width: 1.5rem;
`

export const Links = styled.ul`
  list-style: none;
`

export const LinkItem = styled.li`
  &:hover {
    color: var(--link);
    cursor: pointer;
  }
`

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

export const Twitter = styled(T)`
  ${base}
`

export const Email = styled(E)`
  ${base}
`

export const Linkedin = styled(L)`
  ${base}
`
