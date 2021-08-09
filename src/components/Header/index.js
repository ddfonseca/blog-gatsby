import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Header = (props) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query titleMetaData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.TituloWrapper>
      <S.SearchLink home to="/">
        <S.Titulo post={props.post} title="Voltar para Home">
          {title}
        </S.Titulo>
      </S.SearchLink>

      <S.Bloco2>
        <S.DarkTheme
          title="Mudar de tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
        />
        <S.SearchLink to="/search" title="Pesquisar">
          <S.Search title="Pesquisar" />
        </S.SearchLink>
      </S.Bloco2>
    </S.TituloWrapper>
  )
}

export default Header
