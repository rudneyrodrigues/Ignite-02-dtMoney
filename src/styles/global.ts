import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #F0F2F5 ;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    //Hack para que os browsers que utilizam o chromium por baixo,
    //utilizem as fontes detalhadas.
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, .5);

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: .24rem;
    outline: none;
  }

  @media(max-width: 720px) {
    .react-modal-overlay {
      /* top: auto; */
      align-items: flex-end;
    }

    .react-modal-content {
      padding: 3rem 1.5rem;
      border-radius: 1rem 1rem 0 0;
    }
  }

  @media(max-height: 500px) {
    .react-modal-content {
      max-width: none;
      height: 100%;
      border-radius: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
