import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const number = useSelector(state => state); // 하나의 스테이트만 관리한다는 것이 확실할 때 사용
  console.log('number>>', number); // 1
  const dispatch = useDispatch();
  return (
    <>
      <h4>state값 가져오기</h4>
      <p>store 에 저장 되어있는 number state: ~~</p>

      <h4>state값 변경하기</h4>
      <button onClick={() => dispatch({ type: '증가' })}>
        number state +1
      </button>
      <button onClick={() => dispatch({ type: '감소' })}>
        number state -1
      </button>
    </>
  );
}
