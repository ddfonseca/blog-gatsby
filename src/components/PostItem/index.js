import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PostItem = ({ slug, title, date, timeToRead, description }) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDate>
        {date} <S.Time /> {timeToRead} min de leitura
      </S.PostItemDate>
      <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // timeToRead: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
