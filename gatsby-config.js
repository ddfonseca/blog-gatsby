require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: `David Fonseca`,
    // description: `Bem-vindo ao que se passa na minha mente 😶‍🌫️🗨️. Escrevo sobre códigos 💻, livros 📚 e ideias 💡.`,
    description: `Bem-vindo ao que se passa na minha mente ️👋. Escrevo sobre códigos 💻, livros 📚 e ideias 💡.`,
    author: `@ddfonseca`,
    siteUrl: `https://davidfonseca.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // needs to be the first to work with gatsby-remark-images
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `uploads`,
    //     path: `${__dirname}/static/assets/img`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/portfolio`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 672,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          {
            resolve: `gatsby-remark-prismjs`,
            // optoins: {},
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog pessoal de David Fonseca`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,900`,
          `Merriweather\:300,400,900`,
          'Roboto:400',
          'Inconsolata:300,400,700',
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
