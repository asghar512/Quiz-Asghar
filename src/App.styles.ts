import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/jonatan-pie-IiN-avLVCkY-unsplash.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;

  
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: red;
  }

  .score {
    color: lightblue;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: sans-serif;
    background-image: linear-gradient(180deg, lightblue , grey);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 40px;
    text-align: center;
    margin: 20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
  }

  .start, .next {
    cursor: pointer;
    background: lightblue;
    border: 2px solid lightblue;
    box-shadow: 0px 5px 10px red(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .next:hover{
    color:red;
    font-size:20px;

  }
  .start:hover{
    color:red;
    font-size:20px;

  }
  

  .start {
    max-width: 200px;
    margin-top: 100px;
    
  }
  .name{
    margin-top: 200px;
    margin-right: 750px;
    font-size: 30px;
    background-image: linear-gradient(180deg, green, yellow);
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
  }
  
`;
