import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const RootDiv = styled.div`
  text-align: center;
`;

const AppLogoSpin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  animation: ${AppLogoSpin} 20s linear infinite;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px+2vmin);
  color: white;
`;

const MyA = styled.a`
  color: #61dafb;
`;

export default function PracStyledCom() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopenernoreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
