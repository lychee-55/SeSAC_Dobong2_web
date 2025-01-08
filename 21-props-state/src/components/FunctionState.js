import { useState } from 'react';

export default function FunctionState() {
  /* 기존 js를 사용해서 화면을 바꾸는 방식 */
  /*  
  let apple = '사과';
  const inEng = () => {
    // apple = 'apple';
    // console.log(apple);
    const content = document.querySelector('.state');
    content.innerHTML = 'apple';
  };
  */
  /* 2. state를 사용해서 화면을 변경*/
  /*
  const [apple, setApple] = useState('사과');

  const inEng2 = () => {
    setApple('apple');
  };
  return (
    <div>
      <div className="state">{apple}</div>
      <button onClick={inEng2}>영어로 변경!!</button>
    </div>
  );
  */
  /* 3. vanilla JS 사과 > apple > 사과 > apple*/
  // 기존 js를 사용해서 화면을 바꾸는 방식
  /*
  const inchg = () => {
    const content = document.querySelector('.state');
    content.innerText === '사과'
      ? (content.innerText = '苹果')
      : (content.innerText = '사과');
  };
  return (
    <div>
      <div className="state">사과</div>
      <button onClick={inchg}>언어 변경?</button>
    </div>
  );
  */
  const [showChinese, setShowChinese] = useState(true);
  const inchg2 = () => {
    // true 라면 false로, false라면 true로 변경
    setShowChinese(!showChinese);
  };
  return (
    <div>
      <div className="state">{showChinese ? '苹果' : '사과'}</div>
      <button onClick={inchg2}>언어 변경?</button>
    </div>
  );
}
