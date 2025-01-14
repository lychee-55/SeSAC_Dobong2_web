export default function Result(props) {
  const { content, fruit, color, background } = props.data; // props의 data가 객체로 들어오는 것을 확인했기에 한번 더 구조분해할당을 시도
  //   console.log('data:', data);
  return (
    <div>
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      <p
        style={{
          backgroundColor: background,
          color: color,
          width: '100px',
          height: '30px',
          textAlign: 'center',
          lineHeight: '30px',
        }}
      >
        {content}
      </p>
    </div>
  );
}
