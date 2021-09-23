import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as S from './styled'
import * as classes from './portfolio.module.css'

const PortfolioItem = ({ title, description, src, alt, tags, href }) => {
  return (
    <S.Card>
      <S.ImgContainer>
        <S.Link href={href} target="__blank">
          {/* <StaticImage
            src="../../../../static/assets/img/gojira.png"
            alt={alt}
            placeholder="tracedSVG"
            className={classes.img}
          /> */}
        </S.Link>
      </S.ImgContainer>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Tags>
        {tags.map((tag) => (
          <S.TagItem>{tag}</S.TagItem>
        ))}
      </S.Tags>
    </S.Card>
  )
}

export default PortfolioItem
