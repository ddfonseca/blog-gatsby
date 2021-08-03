import React from 'react'
import PropTypes from 'prop-types'

import { Time } from '@styled-icons/boxicons-regular/Time'

import * as S from './styled'

const PostItem = ({ slug, title, date, timeToRead, description }) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDate>
        {date} <Time width="0.85rem" /> {timeToRead} min de leitura
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
