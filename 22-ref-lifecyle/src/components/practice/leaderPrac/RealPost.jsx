import axios from 'axios';
import { useEffect, useState } from 'react';
import PostItem from './PostItem';

/* async await를 사용하는 방법 */
export default function RealPost() {
  // https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    console.log(response.data);
    setPosts(response.data.slice(0, 10));
  };

  //   getPosts();  => 무조건 함수 안에서 실행해야 함.
  /* useEffect의 콜백에는 async를 사용할 수 없음.
     >> async await를 사용하는 함수를 따로 만들어야 함.
  */
  useEffect(() => {
    getPosts();
  }, []); // id가 바뀔때마다 리랜더링하고 싶다면 dependency에 id를 넣기
  return (
    <>
      <h6>여기는 RealPost</h6>
      {posts.length === 0 ? (
        <span>...Loading...</span>
      ) : (
        posts.map(post => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      )}
    </>
  );
}

// then.catch를 사용하는 방법법
// export default function RealPost() {
//   // https://jsonplaceholder.typicode.com/posts
//   const [posts, setPosts] = useState([]);
//   const getPosts = async () => {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/posts',
//     );

//     console.log(response.data);
//     setPosts(response.data.slice(0, 10));
//   };

//   //   getPosts();  => 무조건 함수 안에서 실행해야 함.
//   /* useEffect의 콜백에는 async를 사용할 수 없음.
//        >> async await를 사용하는 함수를 따로 만들어야 함.
//     */
//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         setPosts(res.data.slice(0, 5));
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []); // id가 바뀔때마다 리랜더링하고 싶다면 dependency에 id를 넣기
//   return (
//     <>
//       <h6>여기는 RealPost</h6>
//       {posts.length === 0 ? (
//         <span>...Loading...</span>
//       ) : (
//         posts.map(post => {
//           return (
//             <PostItem
//               key={post.id}
//               id={post.id}
//               title={post.title}
//               body={post.body}
//             />
//           );
//         })
//       )}
//     </>
//   );
// }
