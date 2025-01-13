import { useRef, useState } from 'react';

export default function RefPrac() {
  const [comment, setComment] = useState([
    { title: '안뇽', writer: '민수' },
    { title: '하이하이', writer: '지민' },
    { title: '멋쟁이', writer: '희수' },
  ]);
  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const inputRef = useRef();
  const inputRef2 = useRef();

  const addMem = () => {
    let newComment = {
      title: inputTitle,
      writer: inputWriter,
    };
    if (inputRef.current.value.trim() === '') {
      return inputRef.current.focus();
    } else if (inputRef2.current.value.trim() === '') {
      return inputRef2.current.focus();
    }
    // console.log(inputRef.current.value);
    setComment([...comment, newComment]);
    setInputTitle('');
    setInputWriter('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          type="text"
          name="writer"
          id="writer"
          value={inputWriter}
          onChange={e => {
            setInputWriter(e.target.value);
          }}
          ref={inputRef}
        />{' '}
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={e => {
            setInputTitle(e.target.value);
          }}
          ref={inputRef2}
        />
        <button type="button" onClick={addMem}>
          작성
        </button>
      </form>
      <br />
      <br />
      <table border={1} style={{ width: '500px', margin: '30px auto' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((el, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{el.writer}</td>
                <td>{el.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
