import { PostListData } from '../../types/interface';

// PostItem 컴포넌트입니다.
interface Props {
  post: PostListData;
}
const PostItem = (props: Props) => {
  const { post } = props;

  return (
    <div className="list">
      <div className="title">
        <span className="no">No. {post.id}</span>
        <span className="spanTitle">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
