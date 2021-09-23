import React from 'react'
import PortfolioItem from './PortfolioItem'
import * as S from './styled'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { portfolios } from './portfolios-list'

const query = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FIXED, placeholder: TRACED_SVG, width: 200)
        }
      }
    }
  }
`

const Portfolio = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <S.PortfolioWrapper>
      <h1>Em breve meu portfolio atualizado aqui.</h1> <br />
      <h2>
        Até 30 de Setembro de 2021 atualizarei, compromisso é compromisso!
      </h2>
      {/* <S.Title>Portfólio </S.Title>
      {nodes.map((img, idx) => {
        const { name } = img
        console.log(img)
        // const image = img.childImageSharp?.gatsbyImageData
        const image = getImage(img)
        return (
          <article key={idx}>
            {image && <GatsbyImage image={image} alt={name} />}
            <p>{name}</p>
          </article>
        )
      })}
      <S.Row>
        {portfolios.map((portfolio) => (
          <PortfolioItem
            title={portfolio.title}
            description={portfolio.description}
            src={portfolio.src}
            alt={portfolio.alt}
            tags={portfolio.tags}
            href={portfolio.href}
          />
        ))}
      </S.Row> */}
    </S.PortfolioWrapper>
  )
}

export default Portfolio
