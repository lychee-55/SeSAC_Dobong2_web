import { useState } from 'react';

export default function PracState() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    // number = number + 1 ==> 불가능
    setNumber(number + 1);
  };
  const decrease = () => {
    // setNumber(number - 2);
    // 복잡한 연산(이전 숫자를 정확히 가져오기 힘들때) 사용법
    setNumber(prevState => {
      return prevState - 2;
    });
  };
  return (
    <div>
      <p>숫자 +/-하기</p>
      <div>숫자 : {number}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
