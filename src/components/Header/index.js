import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './style.css'

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
        {/* <FontAwesomeIcon
          className="icon__"
          icon={faMoon}
          title="Mudar de tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
        <S.DarkTheme
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
        />
        <S.SearchLink to="/search" title="Pesquisar">
          {/* <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon__"
            title="Pesquisar"
          /> */}
          <S.Search title="Pesquisar" />
        </S.SearchLink>
      </S.Bloco2>
    </S.TituloWrapper>
  )
}

export default Header
