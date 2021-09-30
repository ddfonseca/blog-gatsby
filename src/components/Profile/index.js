import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  const profilePhoto = '../../images/profile-photo.jpg'

  const descriptionModified = description.replace('.', '.\n')
  // const descriptionModified = `Olá 👋! Sou o David. \n Escrevo sobre códigos 💻, livros 📚 e ideias 💡.`

  return (
    <S.ProfileWrapper>
      <StaticImage
        src={profilePhoto}
        alt="Foto de David"
        placeholder="tracedSVG"
        className="profile-photo"
      />
      <S.ProfileDescription>{descriptionModified}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
