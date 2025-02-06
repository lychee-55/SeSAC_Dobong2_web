const express = require('express');
const http = require('http');
const { Socket } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = 8080;
/* middleware */
app.set('view engine', 'ejs');

/* api */
app.get('/', (req, res) => {
  res.render('talk_dm');
});

/* socket */
const nickInfo = {};
//{socketId:nickname,...,}
io.on('connection', socket => {
  // 추가된 내용
  // [닉네임 사용]-2
  socket.on('checkNick', nickname => {
    // console.log(nickInfo);
    // // { rlAuf1kXfOJLPNDkAAAL: 'ㅌㅁㄴㅇ' }
    // console.log(Object.values(nickInfo)); //[ 'ㅁ', 'ㄴ', '3' ]
    // console.log(Object.values(nickInfo).indexOf(nickname));

    // 배열에 존재하면 배열의 인덱스 번호를 반환, 없다면 -1을 반환.
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      // 중복된 닉네임일 때
      // (1) 입장 실패
      socket.emit('error', '이미 존재하는 닉네임 입니다.');
    } else {
      // 중복되지 않은 닉네임
      nickInfo[socket.id] = nickname; // 현재 클라이언트 닉네임 정보 넣기
      // (2) 입장 성공, 내 닉네임 정보 전달.(나한테만)
      socket.emit('entrySuccess', nickname);
      // (3) 입장 성공, 입장 알림 메세지 나를 제외한 전체에게 전달
      socket.broadcast.emit('notice', `${nickname}님이 입장하셨습니다.`);
      // (4) 입장 성공, 나를 포함한 전체 client에게 전체 닉네임 정보 전달
      io.emit('updateNicks', nickInfo);
    }
  });

  // [4-2] 메세지를 하나의 클라이언트에게 받아서
  // 전체 클라이언트에게 전달
  socket.on('send', msg => {
    io.emit('message', { id: nickInfo[socket.id], message: msg });
  });

  // [클라이언트 퇴장 공고]
  socket.on('disconnect', () => {
    io.emit('notice', `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
    // nickInfo에서 삭제된 클라이언트의 정보를 삭제해야 함
    delete nickInfo[socket.id]; // 객체에서 특정 데이터 삭제 구문
    console.log('isDeleted?', nickInfo);
    io.emit('updateNicks', nickInfo);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
