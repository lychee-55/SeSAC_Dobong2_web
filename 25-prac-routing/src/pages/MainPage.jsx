import { Link } from 'react-router-dom';
const style = { margin: '4px' };

export default function MainPage() {
  return (
    <div className="main">
      <h2>ReactRouter 실습</h2>
      <nav>
        <li style={style}>
          <Link to={'/student/sean'}>학생</Link>
        </li>
        <li style={style}>
          <Link to={'/student/codingon'}>코딩온</Link>
        </li>
        <li style={style}>
          <Link to={'/student/new?name=jisu'}>searchParams</Link>
        </li>
      </nav>
    </div>
  );
}
