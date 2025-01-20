import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StudentsPage from './pages/StudentsPage';
import './style/common.css';
import NotFound from './pages/404';
import Header1 from './components/Header1';

function App() {
  return (
    <>
      <Header1 />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:name" element={<StudentsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
