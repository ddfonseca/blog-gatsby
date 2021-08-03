import styled from 'styled-components'

export const SearchWrapper = styled.section`
  background: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  ul {
    list-style: none;
  }

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox,
  .ais-Stats {
    /* padding: 0.5rem 3rem; */
  }

  .ais-SearchBox {
    padding-top: 2rem;
  }

  .ais-Stats {
    color: #8899a6;
  }

  .ais-SearchBox-input {
    padding: 0.3rem;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    margin-bottom: 1rem;
    color: var(--text);
    display: flex;
    font-size: 1.6rem;
    /* padding: 0.5rem; */
    width: 100%;

    &::placeholder {
      color: #8899a6;
    }

    &:focus {
      outline: none;
      border: 1px solid white;
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
  .ais-Hits {
    margin-top: 0.6rem;
  }

  .ais-Hits-list {
    /* margin: 0; */
    padding: 0;
  }
`
