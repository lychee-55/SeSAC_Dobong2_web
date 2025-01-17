import { useCallback, useEffect, useState } from 'react';

export default function UseCallbackEx1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log('number: ' + number);
  };

  const func2 = useCallback(() => {
    console.log(`number: ${number} 😊`);
  }, [number]);
  // state가 변경이 되면 컴포넌트도 다시 랜더링 됨(처음부터 끝까지)
  useEffect(() => {
    console.log('함수 1 변경');
  }, [func1]);

  useEffect(() => {
    console.log('함수 2 변경');
  }, [func2]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        call function
      </button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </div>
  );
}
