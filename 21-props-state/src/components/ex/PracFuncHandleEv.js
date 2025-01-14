import { useState } from 'react';
//글씨 색 변경경
export function PracFuncHandleEv() {
  const [color, setColor] = useState({ color: 'black' });
  const [font, setFont] = useState('검정색');
  const red = () => {
    setColor({ color: 'red' });
    setFont('빨간색');
  };
  const blue = () => {
    setColor({ color: 'blue' });
    setFont('파란색');
  };
  return (
    <div>
      <h2 style={color}>{font} 글씨</h2>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  );
}
// 글씨 사라지고 나타나기
export function PracFuncHandleEv2() {
  const [btn, setBtn] = useState(true);
  const hide = () => {
    setBtn(!btn);
  };
  return (
    <div>
      <button onClick={hide}>{btn ? '사라져라' : '보여라'}</button>
      <h2 style={btn ? { visibility: 'visible' } : { visibility: 'hidden' }}>
        안녕하세요
      </h2>
    </div>
  );
}
// 숫자 +/- & 지정 숫자 이후 emoji변경
export function PracFuncHandleEv3() {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  return (
    <div>
      {/* <p>0😊🥰</p> */}
      <p>
        {num}
        {num > 7 ? '🥰' : '😊'}
      </p>
      <button onClick={plus}>1 증가</button>
      <button onClick={minus}>1 감소</button>
    </div>
  );
}
// 멤버 바꾸기
export function ChangeObj({ pororoObjArr }) {
  const [num, setNum] = useState(0);
  // const [state, state변경함수] = useState(state의 초기값);
  const switchMem = () => {
    if (num === pororoObjArr.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };
  return (
    <div>
      <p>이름 : {pororoObjArr[num].name}</p>
      <p>나이 : {pororoObjArr[num].age}</p>
      <p>별명 : {pororoObjArr[num].nickName}</p>
      <button onClick={switchMem}>멤버 바꾸기</button>
    </div>
  );
}
