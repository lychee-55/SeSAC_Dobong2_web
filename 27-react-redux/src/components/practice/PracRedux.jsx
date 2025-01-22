import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function PracRedux() {
  const money = useSelector(state => state);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <h4>잔액: {money}원</h4>
      <input
        type="number"
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => dispatch({ type: 'DEPOSIT' })}>입금</button>
      <button onClick={() => dispatch({ type: 'WITHDRAW' })}>출금</button>
    </>
  );
}
