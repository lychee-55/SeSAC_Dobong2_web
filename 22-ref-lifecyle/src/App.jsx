import LifecycleClass from './components/LifecycleClass';
import LifecycleFunc from './components/LifecycleFunc';
import ColorPrac from './components/practice/ColorPrac2';
import Container from './components/practice/leaderPrac/Container';
import FakePosts from './components/practice/leaderPrac/FakePosts';
import RealPost from './components/practice/leaderPrac/RealPost';
import Practice1 from './components/practice/Practice1';
import QuizPrac from './components/practice/QuizPrac3';
import RefPrac from './components/practice/RefPrac1';
import { RefClass1, RefClass2 } from './components/RefClass';
import { RefFunc1, RefFunc2 } from './components/RefFunc';

function App() {
  return (
    <div>
      {/* 클래스형 Ref & 함수형 Ref */}
      {/* <RefClass1 />
      <hr />
      <RefClass2 /> 

      <RefFunc1 />
      <RefFunc2 />
      */}

      {/* lifecycle */}
      {/* <LifecycleClass />
      <hr />
      <LifecycleFunc /> */}

      {/* practice fakeposts */}
      {/* <Practice1 /> */}
      {/* <Container>
        <FakePosts />
        <RealPost />
      </Container> */}
      {/* ref 실습문제 */}
      <RefPrac />
      <hr />
      <ColorPrac />
      <hr />
      <QuizPrac />
    </div>
  );
}

export default App;
