import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <main>{children}</main>
  </S.LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
