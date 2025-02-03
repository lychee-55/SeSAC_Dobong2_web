// PostList 컴포넌트 입니다.
import '../../style/practice1.css';
import { useEffect, useState } from 'react';
import PostItem from './PostItem';
import { PostListData } from '../../types/interface';

const PostList = () => {
  const [posts, setPosts] = useState<PostListData[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await res.json();

      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className="PostList">
      <header>📬 Post List</header>
      <div className="lists">
        {posts.length > 0 ? (
          posts.map(post => {
            return <PostItem key={post.id} post={post} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default PostList;
