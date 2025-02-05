// npm i ejs express ws
const express = require('express');
const ws = require('ws');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// console.log(server); // 서버 객체
// 클라이언트마다 고유한한 유저번호 만들기
function generateUniqueId() {
  const timestamp = Date.now().toString(36); // 36진수를 반환하는 (알파벳이 포함됨.)
  console.log('timestamp>> ', timestamp);

  const randomString = Math.random().toString(36).substring(2);
  console.log('randomString>> ', randomString);

  return timestamp + randomString;
}

// console.log('id>>', generateUniqueId());
// console.log('abcdef'.substring(2)); // cdef
// console.log('abcdefgh'.substring(2, 5)); // cde

const sockets = [];
const wsServer = new ws.Server({ server: server });
/*
  ws 모듈 이벤트
  - connection : 클라이언트와 웹소켓 서버가 연결되었을 때
  - message : 클라이언트에게 메세지를 받았을 때
  - error : 연결 중 오류
  - close : 클라이언트와 연결 종료료
*/
wsServer.on('connection', socket => {
  //   console.log(socket); // 연결된 하나의 클라이언트에 대한 정보
  const clientId = generateUniqueId();
  console.log(`클라이언트 id:[${clientId}] 연결됨`);
  sockets.push(socket); // 접속한 클라이언트 socket을 배열에 추가

  socket.on('message', message => {
    // message는 버퍼 객체
    // console.log('----------');
    // console.log(message.toString()); // 버퍼.toString
    // console.log(message); // 버퍼객체
    console.log(`${clientId}에게 받은 메세지: ${message}`); // client에서 socket.send한 메세지 // message.toString() 암시적으로 호출

    // 현재 연결된 socket에게만 message를 보내는 것.
    // socket.send('안녕하세요?');

    // 연결된 모든 클라이언트에게 보내는 것
    sockets.forEach(client => {
      client.send(`${message}`);
    });
  });
});
