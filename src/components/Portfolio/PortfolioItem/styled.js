import styled from 'styled-components'

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

export const ImgContainer = styled.div`
  position: relative;
  height: 70%;
  width: 100%;
`

export const Card = styled.div`
  font-family: 'Inconsolata', monospace;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: center;
  height: 300px;
  width: 100%;
  padding-bottom: 1rem;
  /* width: 50%; */
  /* border: 1px solid red; */
  transition: all 0.4s;

  &:hover {
    /* transform: scale(1.05, 1.05); */
    height: 350px;
    box-shadow: 1px 1px 5px #a6a2a2, -1px 1px 5px #a6a2a2;
  }
`

export const Title = styled.h1`
  margin-top: 0.5rem;
  font-family: inherit;
`

export const Description = styled.p`
  margin: 1rem 0 1.5rem;
  font-family: inherit;
`

export const Tags = styled.ul`
  display: flex;
  font-size: 0.8rem;
  list-style: none;
  gap: 0.5rem;
`

export const TagItem = styled.li`
  /* color: #7790a8;
  background-color: #dae2ec; */
  color: var(--text);
  background-color: #babfd1;
  border-radius: 5px;
  padding: 0.3em 0.5em;
`
