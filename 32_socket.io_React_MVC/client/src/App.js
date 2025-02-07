import 'bootstrap/dist/css/bootstrap.css';
import Start from './components/Start';
import Practice1 from './components/Practice1';
import io from 'socket.io-client';
import Chatting1 from './components/Chatting1';
import Chatting2 from './components/Chatting2';
import Chatting3 from './components/Chatting3';

const socket = io.connect('http://localhost:8080', { autoConnect: false });
function App() {
  return (
    <div>
      <h1>소켓으로 채팅 만들기!</h1>
      {/* <Start /> */}
      {/* <Practice1 /> */}
      {/* <Chatting1 /> */}
      {/* <Chatting2 /> */}
      <Chatting3 />
    </div>
  );
}

export default App;
