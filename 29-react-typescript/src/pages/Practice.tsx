import { Link } from 'react-router-dom';

export default function Practice() {
  return (
    <main>
      <h2>실습문제 풀기</h2>
      <Link to={'matzip'}>맛집 모음</Link>
      <br />
      <Link to={'codingon'}>코딩온실습문제</Link>
    </main>
  );
}
