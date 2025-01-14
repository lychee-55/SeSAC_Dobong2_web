import { FunctionProps2 } from './FunctionProps';

export default function PropsMap({ arr }) {
  //   console.log(arr);
  const testArr = [1, 2, 3, 4, 5];
  //   const newTestArr = testArr.map(el => {
  //     return el + 10;
  //   });
  //   const testArr2 = [<div>안녕하세요.</div>, <div>제이름은 lychee입니다.</div>];
  return (
    <div>
      <h3>Map 사용해보기</h3>
      {/* 배열을 그냥 중괄호에 넣으면 배열 그대로 뜸 => 12345 */}
      {testArr}
      {/* {newTestArr} */}
      {/* {testArr2} */}
      {/* {arr.map((el,i,arr)=>{})} */}
      {/* 배열을 map으로 돌리는 방법 */}
      <ul>
        {arr.map((el, i) => {
          return (
            <li key={i}>
              {el.name}, {el.number}개에 {el.krPrice}원
            </li>
          );
        })}
      </ul>
      {/* props를 map으로 돌리는 방법 */}
      {/* <FunctionProps2 name="사과" krPrice={10000} number={5} /> */}
      {arr.map((el, i) => {
        return (
          <FunctionProps2
            key={i}
            name={el.name}
            krPrice={el.krPrice}
            number={el.number}
          />
        );
      })}
    </div>
  );
}
