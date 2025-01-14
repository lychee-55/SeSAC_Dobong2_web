import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'white',
    color: 'black',
    content: 'text',
  });
  return (
    <div>
      {/* Select와 Input에는 함수를 , Result에는 state를 넘겨줌. */}
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </div>
  );
}
