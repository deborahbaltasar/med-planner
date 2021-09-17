import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-background: #E5E5E5;
    --purple: #6C63FF;
    --light-purple: #dce7ff;
    --dark-purple: #253368;
    --darker-purple: #2F2E41;
    --light-blue: #C7DAF5;
    --dark-blue: rgb(33, 80, 141);
    --light-green: #A1C95D;
    --white: #FBFBFB;
    --light-gray: #EEEEEE;
    --gray: #9C9C9C;
    --gray-100: #ced4da;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #212529;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
