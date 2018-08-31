import styled from 'styled-components'

const imageGrid = css => `
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(5em, 12em));
  margin: 2em 0;

  h1, h2, h3, h4, h5, h6 {
    grid-column: 1/-1;
  }

  p {
    text-align: center;
    margin: 0;

    img {
      width: 100%;
    }
    em {
      display: block;
      font-style: normal;
    }
    strong {
      display: block;
      font-weight: 200;
    }
  }
  ${css}
`

export const PageBody = styled.article`
  #heads,
  #alumni {
    ${imageGrid(`
      img {
        border-radius: 50%;
      }
    `)};
  }

  #partners {
    ${imageGrid()};
  }

  .side-by-side {
    display: grid;
    grid-gap: 1em;
    margin: 2em 0;
    grid-auto-flow: column;
    grid-auto-columns: minmax(10em, 40%);
  }

  .multi-col-list ul,
  .multi-col-list ol {
    display: grid;
    grid-gap: 0 2em;
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  }
`

export default PageBody
