import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter .2s;

    svg {
      display: none;
      margin-right: .5rem;
      width: 1.5rem;
      height: 1.5rem;
      color: #fff;
    }

    &:hover {
      filter: brightness(0.95);
    }
  }

  @media(max-width: 1080px) {
    button {
      padding: 1rem;

      svg {
        display: initial;
        margin-right: 0;
      }

      p {
        display: none;
      }
    }
  }
`;