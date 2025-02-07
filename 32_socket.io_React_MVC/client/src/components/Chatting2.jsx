import { useEffect, useState } from 'react';
import '../style/chatting.css';
import Notice from './Notice';
import SpeechChat from './SpeechChat';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8080', { autoConnect: false });

export default function Chatting2() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    {
      type: 'me',
      content: '내가 보낸 메세지',
    },
    {
      type: 'other',
      content: '다른사람이 보낸 메세지',
    },
    {
      type: 'other',
      content: '공지사항 메세지(입장,퇴장)',
    },
  ]);
  const [nickName, setNickName] = useState(null); // 나의 닉네임 저장
  const [nickNameInput, setNickNameInput] = useState(''); // nickname input관리

  useEffect(() => {
    const noticeHandler = notice => {
      const newChatList = [...chatList, { type: 'notice', content: notice }];
      setChatList(newChatList);
    };
    // console.log('이벤트 등록');
    socket.on('notice', noticeHandler);

    return () => {
      // console.log('이벤트 해제');
      socket.off('notice', noticeHandler);
    };
  }, [chatList]);

  // 메세지 전송시 사용되는 함수
  const handleSubmit = e => {
    e.preventDefault(); // 전송 방지지
  };

  ////////////////////////////
  const join = () => {
    initSocketConnect();
    // 닉네임 사용 1. 중복체크를 위해 닉네임을 서버에 전송송
    socket.emit('checkNick', nickNameInput);
  };

  useEffect(() => {
    socket.on('error', errMsg => {
      alert(errMsg);
    });

    socket.on('entrySuccess', myNick => {
      // nickName의 초기값 null,
      // 입장에 성공하면 nickName: string
      setNickName(myNick);
    });
  }, []);
  return (
    <>
      <ul>
        <li>닉네임 받고 중복체크 (서버)</li>
        <li>퇴장 공고</li>
      </ul>

      {!nickName ? (
        <div className="entry-box">
          <input
            type="text"
            placeholder="닉네임 입력"
            value={nickNameInput}
            onChange={e => setNickNameInput(e.target.value)}
          />
          <button onClick={join}>채팅방 입장하기</button>
        </div>
      ) : (
        <div className="container">
          <header>코코아톡💬</header>
          <section>
            {chatList.map((chat, key) =>
              chat.type === 'notice' ? (
                <Notice chat={chat} key={key} />
              ) : (
                <SpeechChat chat={chat} key={key} />
              ),
            )}
          </section>
          {/* !! REACT에서는 ID사양을 권하지 않음. !! */}
          <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
            <select id="dm-select"></select>
            <input
              type="text"
              placeholder="메세지 입력"
              value={msgInput}
              onChange={e => setMsgInput(e.target.value)}
            />
            <button>전송</button>
          </form>
        </div>
      )}
    </>
  );
}
