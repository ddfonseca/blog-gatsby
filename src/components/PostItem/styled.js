import styled from 'styled-components'
import { Link } from 'gatsby'
import { borderAnimation } from './animation'
import { Time as T } from '@styled-icons/boxicons-regular/Time'

export const PostItemLink = styled(Link)`
  position: relative;
  padding: 1rem;
  color: var(--text);
  text-decoration: none;
  display: flex;

  &:before {
    transition: all 0.4s;
    position: absolute;
    content: '';
    width: 100%;
    height: 1%;

    top: 50%;
    left: 0;
    border-color: rgba(200, 200, 200, 0);
    border-style: solid;
    border-width: 0 1px;
  }
  &:after {
    transition: all 0.4s;
    position: absolute;
    content: '';
    width: 30%;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    border-color: rgba(200, 200, 200, 0);
    /* border-color: red; */
    border-style: solid;
    border-width: 1px 0;
  }

  &:hover {
    /* color: var(--link) !important; */
    /* outline: 1px solid var(--link);
    animation: ${borderAnimation} 4s cubic-bezier(0.4, 0, 0.2, 1); */

    &:after {
      width: 100%;
      border-color: var(--link);
    }

    &:before {
      height: 100%;
      /* margin-left: -50%; */
      top: 0;
      left: 0;
      border-color: var(--link);
    }
  }
  margin-bottom: 4rem;
`

export const Time = styled(T)`
  width: calc(16px * 0.85);
`

export const PostItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* align-items: center; */
`

// export const PostItemInfo = styled.div``

export const PostItemDate = styled.time`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`

export const PostItemTitle = styled.h1`
  color: var(--link);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  /* font-family: 'Merriweather'; */
`

export const PostItemDescription = styled.p`
  /* font-size: 1rem; */
  font-weight: 300;
  /* line-height: 1.2; */
`
