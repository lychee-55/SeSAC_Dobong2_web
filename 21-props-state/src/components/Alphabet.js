import { use, useState } from 'react';

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: 'a' },
    { id: 2, alpha: 'b' },
    { id: 3, alpha: 'c' },
    { id: 4, alpha: 'd' },
    { id: 5, alpha: 'e' },
  ]);
  const [input, setInput] = useState('');
  const addAlpha = e => {
    // [1,2,3,4].concat(10) ==> 1,2,3,4,10  배열의 맨 뒤에 요소를 붙여주는 역할할
    const newList = list.concat({
      // length로 그냥 쓰면 중복될 가능성이 있다. 따라서 0일때는 1부터, 0이 아니면 마지막의 id에서 +1을 추가한 id값
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      alpha: input,
    });
    setList(newList);
    setInput('');
  };
  //   input 태그에 커서를 대고 엔터를 눌렀을 때 등록이 되도록:
  const activeEnter = e => {
    // console.log(e.key); // 키보드의 정보
    if (e.key == 'Enter') {
      addAlpha();
    }
  };
  const deleteAlpha = id => {
    const newAlpha = list.filter(alpha => {
      return alpha.id !== id;
    });
    setList(newAlpha);
  };
  //   [1,2,3,4,5].filter((el,i,arr)=>{})
  //   const newArr = [1, 2, 3, 4, 5].filter(el => {
  //     return el > 3;
  //   });
  //   console.log(newArr);
  return (
    <div>
      <h2>Alphabet</h2>
      <input
        type="text"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {list.map(el => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
