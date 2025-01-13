import { useEffect, useState } from 'react';

const MyComponent = ({ number }) => {
  const [text, setText] = useState('');
  /*
    useEffect(effect[,dependency_array])
    - effect : 콜백 함수
    - dependency_array(의존성 배열): 
      의존성 배열에 있는 데이터가 변하면, 콜백 함수 실행
        - [] : Mount 되었을 때만 동작
        - 생략 : Mount, Update시 언제나 동작
        - [data,(data2,...)] : Mount, 'data' 가 Update 되었을 때만 동작
    */

  // Mount 시점에 실행
  useEffect(() => {
    console.log('함수형 컴포넌트 Mount!! 🪺');
  }, []);

  // UnMount 시점에 실행 + (mount 시점에 실행)
  useEffect(() => {
    // return위에는 mount되었을 때 , return아래에는 unmount, 같이 작성 가능함.
    return () => {
      console.log('함수형 컴포넌트 UnMount!! 🐉');
    };
  }, []);

  /* ======= UPDATE =========== */
  // 1. update 시점에 실행
  useEffect(() => {
    // text, number스테이트가 바뀔 때 모두 등장함.
    console.log('함수형 컴포넌트 Update!! 될때마다🐍');
  });

  // 2. 특정 state update 실행
  useEffect(() => {
    console.log('함수형 컴포넌트 Update!! text 변경!!🐣');
  }, [text]);

  return (
    <>
      <p>MyComponent: {number}</p>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </>
  );
};

const LifecycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON / OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};

export default LifecycleFunc;
