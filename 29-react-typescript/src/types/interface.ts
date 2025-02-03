import Practice from '../pages/Practice';

export interface TodoItemInterface {
  id: number;
  text: string;
  done: boolean;
}

// Matzip관련
export interface MatzipInterface {
  idx?: number;
  imgSrc: string;
  title: string;
  desc: string;
}

// PostList 관련
export interface PostListData {
  userid: number;
  id: number;
  title: string;
  body: string;
}
