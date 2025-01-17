import CustomHook from './components/CustomHook';
import Form from './components/Form';
import PracHookForm from './components/practice/PracHookForm';
import UseCallbackEx1 from './components/UseCallbackEx1';
import UseCallbackEx2 from './components/UseCallbackWx2';
import UseMemo1 from './components/UseMemo1';
import UseMemo2 from './components/UseMemo2';
import UseReducer from './components/UseReducer';
import useTitle from './hooks/UseTitle';

function App() {
  useTitle('hook 배워보기');
  return (
    <>
      {/* <UseMemo1 />
      <hr />
      <UseMemo2 /> */}

      {/* <UseCallbackEx1 />
      <UseCallbackEx2 />
      <UseReducer /> */}

      {/* <CustomHook />
      <Form /> */}
      {/* 실습문제 */}
      <PracHookForm />
    </>
  );
}

export default App;
