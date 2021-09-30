import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as S from './styled'
import * as classes from './portfolio.module.css'

// const PortfolioItem = ({ title, description, src, alt, tags, href }) => {
const PortfolioItem = () => {
  return (
    <>
      <S.TitlePage>Portfolio </S.TitlePage>
      <S.PortfolioWrapper>
        <S.Card>
          <S.ImgContainer>
            <S.Link href="https://gojira-drab.vercel.app/" target="__blank">
              <StaticImage
                src="../../../../static/portfolio/gojira.png"
                alt="Gojira Training"
                placeholder="tracedSVG"
                className={classes.img}
              />
            </S.Link>
          </S.ImgContainer>
          <S.Title>Gojira Training</S.Title>
          <S.Link href="https://gojira-drab.vercel.app/" target="__blank">
            <S.Elink />
          </S.Link>
          <S.Description>
            Landing page com Nextjs/styled-components, CSS responsivo
          </S.Description>
          <S.Tags>
            <S.TagItem>ReactJS</S.TagItem>
            <S.TagItem>NextJS</S.TagItem>
            <S.TagItem>HTML</S.TagItem>
            <S.TagItem>CSS</S.TagItem>
            <S.TagItem>Frontend</S.TagItem>
          </S.Tags>
        </S.Card>
        <S.Card>
          <S.ImgContainer>
            <S.Link href="https://ankinobrowser.netlify.app/" target="__blank">
              <StaticImage
                src="../../../../static/portfolio/anki.png"
                alt="Gojira Training"
                placeholder="tracedSVG"
                className={classes.img}
              />
            </S.Link>
          </S.ImgContainer>
          <S.Title>Anki no Browser</S.Title>
          <S.Link href="https://ankinobrowser.netlify.app/" target="__blank">
            <S.Elink />
          </S.Link>
          <S.Description>
            Dark/light mode no React, styled-components e uso de API.
          </S.Description>
          <S.Tags>
            <S.TagItem>ReactJS</S.TagItem>
            <S.TagItem>API</S.TagItem>
            <S.TagItem>HTML</S.TagItem>
            <S.TagItem>CSS</S.TagItem>
            <S.TagItem>Frontend</S.TagItem>
          </S.Tags>
        </S.Card>
        <S.Card>
          <S.ImgContainer>
            <S.Link
              href="https://github.com/ddfonseca/ranking-bot"
              target="__blank"
            >
              <StaticImage
                src="../../../../static/portfolio/john_bot.png"
                alt="Gojira Training"
                placeholder="tracedSVG"
                className={classes.img}
              />
            </S.Link>
          </S.ImgContainer>
          <S.Title>Telegram Bot</S.Title>
          <S.Link
            href="https://github.com/ddfonseca/ranking-bot"
            target="__blank"
          >
            <S.Elink />
          </S.Link>
          <S.Description>Ranking de horas líquidas no telegram.</S.Description>
          <S.Tags>
            <S.TagItem>NodeJS</S.TagItem>
            <S.TagItem>Supabase</S.TagItem>
            <S.TagItem>Postgresql</S.TagItem>
            <S.TagItem>Backend</S.TagItem>
          </S.Tags>
        </S.Card>
      </S.PortfolioWrapper>
    </>
  )
}

export default PortfolioItem
