export default function Input({ setData }) {
  //   console.log(setData);
  const handleChange = event => {
    /* ---- setData 하는 법---- */
    // {
    //     fruit: 'apple',
    //     background: 'white',
    //     color: 'black',
    //     content: 'text',
    //   }
    // 객체이기 때문에 {}로 작성
    // 이전 상태를 알 수가 없는 상황에는 :

    /* ---- content의 value에 접근하는 법---- */
    // console.log('target>>', event.target);
    // console.log('currentTarget>>', event.currentTarget);
    // event.target과 event.currentTarget은 똑같이 input태그를 불러옴.
    setData(prevState => {
      return { ...prevState, content: event.target.value };
    });
  };
  return (
    <div>
      내용 :{' '}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
