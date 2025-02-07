const socketIO = require('socket.io');

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: 'http://localhost:3000',
    },
  });

  const nickInfo = {}; // {socket.id : nickname}
  io.on('connection', socket => {
    console.log(socket.id);
    // [Chatting1.jsx]
    // io.emit('notice', nickInfo[socket.id] + '님이 입장했습니다.');

    // [Chatting2.jsx]
    // 닉네임 사용 2. 닉네임 중복 체크 후 사용가능한 닉네임일 때 nickInfo에 추가
    socket.on('checkNick', nickname => {
      if (Object.values(nickInfo).includes(nickname)) {
        socket.emit('error', '이미 존재하는 닉네임 입니다');
      } else {
        nickInfo[socket.id] = nickname;
        socket.emit('entrySuccess', nickname);
        io.emit('notice', nickInfo[socket.id] + '님이 입장했습니다.');

        // 입장 성공시 해당 클라이언트에게 전체 user 정보를 넘겨줌
        io.emit('updateNicks', nickInfo);
      }
    });
    socket.on('disconnect', () => {
      io.emit('notice', nickInfo[socket.id] + '님이 퇴장하였습니다.');
      delete nickInfo[socket.id]; // 객체에서 제거
    });

    // 하나의 클라이언트에게 메시지를 받고
    // 전체 클라이언트 혹은 DM을 보내고자 하는 클라이언트에게
    // 받은메세지 전송
    socket.on('send', msgData => {
      if (msgData.dmTo === 'all') {
        io.emit('message', {
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: false,
        });
      } else {
        // DM일 때 DM대상 클라이언트에게만 보이도록
        io.to(msgData.dmTo).emit('message', {
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: true,
        });
        // DM일 때 나한테 보이도록
        socket.emit('message', {
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: true,
        });
      }
    });
  });
}

module.exports = socketHandler;
