import { useState } from 'react';

export default function MapPrac2() {
  const [comment, setComment] = useState([
    { writer: '리치', title: '화이팅' },
    { writer: '얍', title: '멘붕' },
    { writer: '댐댐', title: '올라간다!' },
  ]);
  const [inputWriter, setInputWriter] = useState(''); // 작성자 등록 input
  const [inputTitle, setInputTitle] = useState(''); // 제목 등록 input
  const [inputSearch, setInputSearch] = useState(''); // 검색어 input

  const [result, setResult] = useState([]); //검색 결과에 대한 배열
  const [searchType, setSearchType] = useState('writer');

  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]);
    setInputTitle('');
    setInputWriter('');
    /*
[...comment,newComment]===[
    { writer: '리치', title: '화이팅' },
    { writer: '얍', title: '멘붕' },
    { writer: '댐댐', title: '올라간다!' },
    newComment
    ]
    */
  };

  // 검색을 실행하는 함수
  const searchComment = e => {
    let searchResult = comment.filter(item => {
      //   console.log(item);
      //   console.log(item[searchType]);
      //   console.log('검색어 검사', item[searchType].includes(inputSearch));
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });
    console.log(searchResult);
    setResult(searchResult); // 검색어 결과 설정
    setInputSearch('');
  };

  // search type에 따라서 어떤 검색을 할지 결정
  const selectSearchType = e => {
    setSearchType(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자 :</label>
        <input
          type="text"
          placeholder="작성자"
          name="writer"
          id="writer"
          value={inputWriter}
          onChange={e => {
            setInputWriter(e.target.value);
          }}
        />
        {'  '}
        <label htmlFor="writer">제목 :</label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={e => {
            setInputTitle(e.target.value);
          }}
        />
        {''}
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <br />
      {/* 검색폼 */}
      <form>
        <select name="type" onChange={selectSearchType}>
          <option value={'writer'}>작성자</option>
          <option value={'title'}>제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          name="search"
          onChange={e => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>
      <br />
      <table
        border={1}
        cellPadding={10}
        cellSpacing={0}
        width={500}
        style={{ margin: '30px auto' }}
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색결과</h4>
      {result.length === 0 ? (
        <h3>검색결과가 없습니다🥺</h3>
      ) : (
        <table
          border={1}
          cellPadding={10}
          cellSpacing={0}
          width={500}
          style={{ margin: '30px auto' }}
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, id) => {
              return (
                <tr key={id + 1}>
                  <td>{id + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
