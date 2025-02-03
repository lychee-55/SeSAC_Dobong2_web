import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lecture from './pages/Lecture';
import Practice from './pages/Practice';
import Matzip from './pages/Matzip';
import PostList from './components/practicePost/PostList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/matzip" element={<Matzip />} />
        <Route path="/practice/codingon" element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;
