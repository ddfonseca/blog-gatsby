import * as React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Header />
    <Seo title="404: Not found" />
    <h1>Error 404: Página não encontrada!</h1> <br />
    <p>Pelo visto está tentando acessar uma página que não existe!</p>
  </Layout>
)

export default NotFoundPage
