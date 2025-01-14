export default function Select({ setData }) {
  /* ---- setData 하는 법---- */
  // {
  //     fruit: 'apple',
  //     background: 'white',
  //     color: 'black',
  //     content: 'text',
  //   }
  return (
    <div>
      {/* select 3개*/}
      과일 :
      <select
        onChange={e => {
          /* ---- content의 value에 접근하는 법---- */
          //   console.log('target>>', e.target);
          //   console.log('currentTarget>>', e.currentTarget);
          // event.target과 event.currentTarget은 똑같이 select태그를 불러옴.
          //   console.log('e.target.value>>', e.target.value);
          setData(prevState => {
            return { ...prevState, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색:
      <select
        onChange={e => {
          setData(prevState => {
            return { ...prevState, background: e.target.value };
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨강색</option>
        <option value="yellow">노랑색</option>
        <option value="green">녹색</option>
        <option value="blue">파랑색</option>
        <option value="purple">보라색</option>
        <option value="pink">분홍색</option>
      </select>
      글자색:
      <select
        onChange={e => {
          const color = e.target.value;
          setData(prevState => {
            return { ...prevState, color }; // key이름과 value가 같을 때는 하나만 작성해도 됨. 여기선 color:color여서 하나를 생략
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨강색</option>
        <option value="yellow">노랑색</option>
        <option value="green">녹색</option>
        <option value="blue">파랑색</option>
        <option value="purple">보라색</option>
        <option value="pink">분홍색</option>
      </select>
    </div>
  );
}
