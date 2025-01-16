import { useMemo, useState } from 'react';

export default function UseMemo1() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState('');
  // [useMemo 사용 전]
  // (연관없는) input 스테이트가 변경될 때도, 연산이 이루어짐. > calc() 호출 중
  const calc = () => {
    console.log('calc....');

    return number * 2;
  };

  // [useMemo 사용 후]
  // 특정 값이 변경 되었을 때만 함수가 호출되도록
  // number 값이 변경될 때만 함수를 재실행하고 값을 저장
  const calc2 = useMemo(() => {
    console.log('calc....2');

    // return 이후의 number * 2 값이 memorization 됨.
    return number * 2;
  }, [number]);

  return (
    <>
      <input type="text" onChange={e => setInputValue(e.target.value)} />
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <p>number:{number}</p>
      <p>clac:{calc()}</p>
      <p>clac:{calc2}</p>
    </>
  );
}
