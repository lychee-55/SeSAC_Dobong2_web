import { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    console.log(prevTitle);
    document.title = title; // 실제로 title을 변경함.

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
  //   UseTitle이라는 hook은 따로 return을 할 필요가 없음.
}
