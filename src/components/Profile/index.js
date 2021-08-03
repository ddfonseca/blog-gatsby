import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import profilePhoto from "../../images/profile-photo.jpg"
// import { StaticImage } from "gatsby-plugin-image"
// import { css } from "styled-components"
import * as S from "./styled"

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
          # description2
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileImage src={profilePhoto} />
      <S.ProfileDescription>
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </S.ProfileDescription>
      {/* <S.ProfileDescription2>
            {data.site.siteMetadata.description2}
          </S.ProfileDescription2> */}
    </S.ProfileWrapper>
  )
}

export default Profile
