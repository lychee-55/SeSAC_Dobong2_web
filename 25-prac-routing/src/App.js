import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StudentsPage from './pages/StudentsPage';
import './style/common.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:name" element={<StudentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
