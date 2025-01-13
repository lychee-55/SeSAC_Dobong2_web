import { useRef, useState } from 'react';

// DOM 요소를 선택하기 위한 Ref
export function RefFunc1() {
  // 1. ref 객체 만들기
  const inputRef = useRef();

  // 3. ref.current에 접근해서 원하는 작업 진행
  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <div>
      {/* 2. 선택하고 싶은 태그에 ref 전달 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
}

// 변수처럼 사용하는 Ref
export function RefFunc2() {
  const ref = useRef(1); // ref변수
  const [state, setState] = useState(1); // state변수
  let variable = 1; // 일반 변수

  const plusRef = () => {
    ref.current += 1;
    console.log('ref.current >> ', ref.current);
  };
  const plusState = () => {
    setState(state + 1);
    console.log('state >> ', state);
  };
  const plusVar = () => {
    variable += 1;
    console.log('variable >> ', variable);
  };
  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>Plus Ref</button>
      {/* state가 변경이 되면 함수가 다시 읽힘 (리랜더링함, 28번 줄 부터 53번 까지), variable같은 일반변수는 초기화가 됨. */}
      {/* rerendering할 때 수가 변동없기를 원한다면 ref를 변동있어도 괜찮다면 일반변수(variable)를 사용  */}
      <h4>{state}</h4>
      <button onClick={plusState}>Plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVar}>Plus variable</button>
    </div>
  );
}
