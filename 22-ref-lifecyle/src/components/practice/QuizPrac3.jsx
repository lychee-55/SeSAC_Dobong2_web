import { use, useEffect, useRef, useState } from 'react';

export default function QuizPrac() {
  const myRef = useRef();
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const arr = ['+', '-', '*'];
  const [oper, setOper] = useState('');
  const [inputValue, setInputValue] = useState('');

  const getResult = () => {
    let result;
    setA(Math.floor(Math.random() * 11));
    setB(Math.floor(Math.random() * 11));
    setOper(Math.floor(Math.random() * 3));

    if (oper === 0) {
      result = a + b;
    } else if (oper === 1) {
      result = a - b;
    } else {
      result = a * b;
    }

    if (result === parseInt(myRef.current.value)) {
      alert('정답입니다!🎉🎉');
    } else {
      alert(`틀렸습니다, 정답은 ${result}입니다.🥺`);
    }
    setInputValue('');
  };

  useEffect(() => {
    getResult();
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <label htmlFor="answer" style={{ fontSize: '20px', fontWeight: 700 }}>
        {a}
        {arr[oper]}
        {b}
      </label>
      <br />
      <input
        type="text"
        name="answer"
        id="answer"
        ref={myRef}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <br />
      <button type="button" onClick={getResult}>
        정답 제출
      </button>
    </div>
  );
}
