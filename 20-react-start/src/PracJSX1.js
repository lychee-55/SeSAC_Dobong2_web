export default function PracJSX() {
  const name = '루이스';
  const animal = '강아지';
  let a = 5;
  let b = 3;
  return (
    <div>
      <h2>
        제 반려동물의 이름은 <u>{name}</u>
        입니다.
        <br />
        <u>{name}</u>은 <u>{animal}</u>입니다.
      </h2>
      <div style={{ color: 'blue' }}>
        {3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}
      </div>
      <div>{a > b && 'A보다 B가 큽니다'}</div>
    </div>
  );
}
