import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h2>404 ERROR!!🚨</h2>
      <Link to="/">Home 으로 이동하기</Link>
    </>
  );
}
