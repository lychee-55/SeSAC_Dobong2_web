import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetailPage({ products }) {
  const navigate = useNavigate();
  console.log(products);
  // params를 통해서 몇 번 id의 정보를 찾고있는지 확인
  const params = useParams();
  console.log('params>>', params);
  // {productID: '1'},
  // key 이름의 출처? Route 컴포넌트의 path props 확인!

  const { productID } = useParams(); // App.js의 path 키값으로 params에서 찾음음
  // id 를 기준으로 products에서 원하는 데이터 찾기
  console.log(productID);

  const [targetProduct] = products.filter(p => p.id === Number(productID));
  console.log(targetProduct[0]); // {} or undefined
  if (!targetProduct) {
    return <main>없는 상품이에요..</main>;
  }

  return (
    <main>
      <p>여기는 상품 상세페이지!!</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동</button>
      <ul>
        <li>판매번호 : {targetProduct.id}</li>
        <li>상품명 : {targetProduct.name}</li>
        <li>판매자 : {targetProduct.email}</li>
        <li>상세설명 : {targetProduct.body}</li>
      </ul>
    </main>
  );
}
