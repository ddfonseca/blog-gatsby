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

  return (
    <S.ProfileWrapper>
      <StaticImage
        src={profilePhoto}
        alt="Foto de David"
        placeholder="blurred"
        style={{ borderRadius: '50%', width: '5rem', marginRight: '1rem' }}
      />
      <S.ProfileDescription>{descriptionModified}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
