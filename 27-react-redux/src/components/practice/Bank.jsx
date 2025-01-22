import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../../store/module/practice/bankReducer';
import { useState } from 'react';

export default function Bank() {
  const [inputNum, setInputNum] = useState(0);
  const balance = useSelector(state => state.bank);
  // console.log('잔액:', balance);

  const dispatch = useDispatch();
  return (
    <div>
      {/* <p>잔액: {balance.toLocaleString()}원</p> */}
      <p>잔액: {balance}원</p>
      <input
        type="text"
        step={10000}
        value={inputNum}
        onChange={e => setInputNum(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(inputNum))}>예금</button>
      <button onClick={() => dispatch(withdraw(inputNum))}>출금</button>
    </div>
  );
}
