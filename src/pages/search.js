import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import Search from '../components/Search'
import Header from '../components/Header'

const SearchPage = () => (
  <Layout>
    <Seo title="Search" />
    <Header />
    <Search />
  </Layout>
)

export default SearchPage
