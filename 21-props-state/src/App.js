import { ClassProps, ClassProps2 } from './components/ClassProps';
import ClassState from './components/ClassState';
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from './components/FunctionProps';
import FunctionState from './components/FunctionState';
import PracStateFunc from './components/practice/PracStateFunc';
import PracStateClass from './components/practice/PracStateClass';
import SynthethicEvent from './components/SyntheticEvent';
import Counter from './components/Counter';
import HandleEx from './components/ex/HandleEx';
import {
  ChangeObj,
  PracFuncHandleEv,
  PracFuncHandleEv2,
  PracFuncHandleEv3,
} from './components/ex/PracFuncHandleEv';

function App() {
  return (
    <div>
      <h2>Props 사용</h2>
      {/* <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2 name="루피" color="pink" nickname="공주" fontColor="white" />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: 'red' }}>children요소 입니다!!!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: 'red' }}>children요소 입니다!!!</span>
      </FunctionProps4> */}

      <h2>State 사용</h2>
      {/* <h2>클래스형 state</h2>
      <ClassState />
      <h2>함수형 state</h2>
      <FunctionState />

      <h2>+/-실습문제</h2>
      <h3>클래스형</h3>
      <PracStateClass />
      <h3>함수형</h3>
      <PracStateFunc /> */}

      <h2>Event 사용</h2>
      {/* <SynthethicEvent />
      <Counter /> */}
      <hr />
      <h2>HandleEvent 실습문제</h2>
      <h3>1번 문제</h3>
      <HandleEx />
      <hr />
      <h3>2번 문제</h3>
      <PracFuncHandleEv />
      <hr />
      <h3>3번 문제</h3>
      <PracFuncHandleEv2 />
      <hr />
      <h3>4번 문제</h3>
      <PracFuncHandleEv3 />
      <hr />
      <h3>5번 문제</h3>
      <ChangeObj
        pororoObjArr={[
          {
            name: '뽀로로',
            age: '7',
            nickName: '사고뭉치',
          },
          {
            name: '루피',
            age: '5',
            nickName: '공주님',
          },
          {
            name: '크롱',
            age: '4',
            nickName: '장난꾸러기',
          },
        ]}
      />
    </div>
  );
}

export default App;
