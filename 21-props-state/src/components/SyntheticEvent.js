export default function SynthethicEvent() {
  function synthethicEvent(e) {
    console.log(e);
    console.log('합성 이벤트 클릭!!');
  }

  function printInput(e) {
    console.log(e.target.value);
    // e => 데이터
    // e.target => 해당 태그
    // e.target.value => 해당 태그의 값
  }

  function callTest() {
    alert('안녕하세요?');
  }
  return (
    <div>
      <button onClick={synthethicEvent}>콘솔을 보세요</button>
      {/* <button onClick={callTest()}>함수 호출해서 전달</button> */}
      <br />
      {/* 화살표 함수로 호출할 경우 인자를 안받으면 데이터 전달을 못함 */}
      <input
        type="text"
        placeholder="글자를 입력하세요."
        onChange={e => {
          printInput(e);
        }}
      ></input>
    </div>
  );
}
