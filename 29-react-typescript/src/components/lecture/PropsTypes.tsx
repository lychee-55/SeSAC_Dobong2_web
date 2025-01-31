interface Props {
  name: string;
}

export function PropsType1({ name }: Props) {
  return (
    <>
      <h2>hello {name}</h2>
    </>
  );
}

interface Square {
  [key: string]: string;
}
export function PropsType2(props: Square) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };
  return <div style={divStyle}></div>;
}

interface Square2 {
  width: string;
  height: string;
  color?: string;
  text: string;
}
export function PropsType3(props: Square2) {
  const { width, height, color, text } = props;
  const divStyle = {
    width: `${width}`,
    height: `${height}`,
    // ? 처리된 속성의 예외처리를 꼭 해야함.
    backgroundColor: `${color ? color : 'pink'}`,
    // textAlign: 'center',
    lineHeight: `${height}`,
  };
  return <div style={divStyle}>{text}</div>;
}
