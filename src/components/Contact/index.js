import React from 'react'
import Layout from '../Layout'
import Header from '../Header'
import * as S from './styled'

const Contact = () => {
  return (
    <Layout>
      <Header />
      <p>
        Olá 👋! Tudo bem? Meu nome é David (lê-se Davi), tenho 30 anos e sou
        apaixonado por programação!
      </p>
      <br />
      <p>Você pode me encontrar em:</p>
      <br />
      <S.Links>
        <S.LinkItem>
          <S.Link href="https://twitter.com/ddfonseca6" target="__blank">
            <S.Twitter /> @ddfonseca6
          </S.Link>
        </S.LinkItem>
        <S.LinkItem>
          <S.Link href="mailto:olfdavid@gmail.com">
            <S.Email /> olfdavid@gmail.com
          </S.Link>
        </S.LinkItem>
        <S.LinkItem>
          <S.Link
            href="https://www.linkedin.com/in/david-fonseca-16746ab6/"
            target="__blank"
          >
            <S.Linkedin /> Perfil no Linkedin
          </S.Link>
        </S.LinkItem>
      </S.Links>
    </Layout>
  )
}

export default Contact
