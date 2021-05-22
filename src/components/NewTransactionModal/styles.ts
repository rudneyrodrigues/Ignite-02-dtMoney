import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  .close-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    background: none;
    border: none;
    border-radius: .25rem;

    transition: filter .2s;

    svg {
      color: #A8A8B3;
      width: 1.3rem;
      height: 1.3rem;
    }

    &:hover {
      filter: brightness(.8);
    }
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    font-weight: 600;
    border-radius: .25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  }

  @media(max-height: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "title title"
      "input1 button"
      "input2 button"
      "input3 submit";
    gap: 0 1rem;

    h2 {
      grid-area: title;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      /* margin-top: 1rem; */

      &.title {
        grid-area: input1;
      }

      &.amount {
        grid-area: input2;
      }

      &.category {
        grid-area: input3;
        margin-top: 1rem;
      }
    }

    button[type="submit"] {
      grid-area: submit;
      margin-top: 1rem;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;

  @media(max-height: 500px) {
    grid-area: button;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0;
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: .25rem;

  background: ${(props) => props.isActive
    ? transparentize( 0.8 ,colors[props.activeColor])
    : 'transparent'
  };
  
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color .2s;

  &:hover {
    border-color: ${darken(.1, '#d7d7d7')};
    // Ira escurecer em 10%  a cor informada
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  @media(max-height: 500px) {
    width: 100%;
  }
`;