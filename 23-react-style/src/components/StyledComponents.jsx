import styled, { keyframes } from 'styled-components';

const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0;
`;

const H4Title = styled.h4`
  background-color: yellowgreen;

  /* 반응형 설정하기 */
  /* portrait는 기기의 세로방향 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: green;
  }
  /* landscape는 기기의 가로방향 */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: red;
  }
`;

const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;

// keyframe은 css문법이라 js에서 바로사용 X, 변수선언으로 작성해야함.
const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(180deg);
    background-color: aliceblue;
  }
  100%{
    transform: rotate(360deg)
    }
`;

// props 사용, hover, animation(변수 선언) 사용
const Child = styled.span`
  color: red;

  &:hover {
    cursor: pointer;
    /* color: wheat; */
    color: ${props => (props.color ? props.color : 'wheat')};
    background-color: ${props => (props.bg ? props.bg : 'yellow')};
    /* animation */
    animation: ${rotate} 1s linear infinite;
  }
`;

export default function StyledComponents() {
  return (
    <StyledContainer>
      <H4Title>Styled Components 이용</H4Title>
      <ParentDiv>
        <Child>element1</Child>
        <Child color="blue" bg="skyblue">
          element2
        </Child>
        <Child>element3</Child>
      </ParentDiv>
    </StyledContainer>
  );
}
