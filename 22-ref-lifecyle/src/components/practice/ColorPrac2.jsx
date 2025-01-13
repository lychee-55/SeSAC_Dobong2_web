import { useRef, useState } from 'react';

export default function ColorPrac() {
  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState('');
  const myRef = useRef();
  const changeColor = () => {
    myRef.current.focus();
    setColor(inputValue);
    setInputValue('');
  };
  return (
    <div>
      <form>
        <div
          style={{
            backgroundColor: color,
            textAlign: 'center',
            display: 'inline-block',
            width: '200px',
          }}
        >
          <input
            type="text"
            name="colorText"
            id="colorText"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
            }}
            ref={myRef}
          />
          <br />
          <button type="button" onClick={changeColor}>
            색 적용
          </button>
        </div>
      </form>
    </div>
  );
}
