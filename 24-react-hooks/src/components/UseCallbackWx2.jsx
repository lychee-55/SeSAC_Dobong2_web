import { useCallback, useState } from 'react';

export default function UseCallbackEx2() {
  const [inputValue, setInputValue] = useState('');

  // 렌더링 될 때마다 다시 메모리에 저장이 되고 있음.
  //   const onChangeText = e => {
  //     setInputValue(e.target.value);
  //   };

  // 첫번째 렌더링이 되었을 때만 메모리에 저장됨
  const onChangeText = useCallback(e => {
    setInputValue(e.target.value);
  }, []);
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChangeText} />
      <p>작성한 값 : {inputValue}</p>
    </div>
  );
}
