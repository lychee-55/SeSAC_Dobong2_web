import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8080', {
  autoConnect: false,
});
export default function Practice1() {
  // 소켓 실행시 기본코드
  const [fromServerStr, setFromServerStr] = useState('');
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    // 랜더링 되자마자
    socket.on('bye2', str => {
      setFromServerStr(str);
    });
    socket.on('study2', str => {
      setFromServerStr(str);
    });
    socket.on('hello2', str => {
      setFromServerStr(str);
    });

    return () => {
      // 컴포넌트가 없을 때는 아래 내용을 지워주세요 라는 뜻
      socket.off('bye2');
      socket.off('study2');
      socket.off('hello2');
    };
  }, []);
  // socket.on은 이벤트 핸들러가 등록된다
  //   -> useEffect밖에 넣을 시 중복 등록 가능성이 있음.(랜더링이 여러번 진행됨. 불필요한 랜더링과 성능저하)
  //    socket.on('hello2', str => {
  //        setFromServerStr(str);
  //    });

  const events = ['bye', 'study', 'hello'];

  const emitToServer = eventName => {
    socket.emit(eventName, eventName);
  };
  return (
    <>
      <h3>실습1번</h3>
      {events.map(event => (
        <button key={event} onClick={() => emitToServer(event)}>
          {event}
        </button>
      ))}

      <h3>server: {fromServerStr}</h3>
    </>
  );
}
