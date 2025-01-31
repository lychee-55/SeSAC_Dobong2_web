import React from 'react';

export default function EventObj() {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    console.log(e.target); // mouse event는 value속성이 없어서 적으면 안 됨.
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
    console.log(event.target.value); // changeEvent라 이렇게 작성.
  }
  function handleKeyDown(a: React.KeyboardEvent<HTMLInputElement>) {
    console.log(a.key);
    console.log(a.code);
    // console.log(a.keyCode);
  }
  return (
    <div style={{ backgroundColor: 'aquamarine' }}>
      {/* onClick 내에서 event를 전달받을 때는 
      이벤트 타입 작성하지 않아도 됨 */}
      <div onClick={e => console.log(e)}>onClick</div>
      <div onClick={handleClick}>onClick</div>
      <div>
        <span>onChange</span>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <span>onKeyDown</span>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
      <div onDrag={handleClick}>onDrag</div>
    </div>
  );
}
