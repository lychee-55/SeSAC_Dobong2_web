import { useState } from 'react';

export default function MapPrac1() {
  const [list, setList] = useState([
    { id: 1, name: '코디', email: 'codi@gmail.com' },
    { id: 2, name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const addMember = e => {
    const newList = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: nameInput,
      email: emailInput,
    });
    setList(newList);
    setNameInput('');
    setEmailInput('');
  };
  const addMemEnter = e => {
    // console.log(e.key);
    if (e.key === 'Enter') {
      addMember();
    }
  };
  const deleteMember = id => {
    const uploadedList = list.filter(list => {
      return list.id !== id;
    });
    setList(uploadedList);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={nameInput}
        onChange={e => {
          setNameInput(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={emailInput}
        onChange={e => {
          setEmailInput(e.target.value);
        }}
        onKeyDown={addMemEnter}
      />
      <button onClick={addMember}>등록</button>
      <div>
        {/* <h2>코디 : codi@gmail.com</h2>
        <h2>윤소희 : yoonsohee@gmail.com</h2> */}
        {list.map(el => {
          return (
            <h2 key={el.id} onDoubleClick={() => deleteMember(el.id)}>
              {el.name} : {el.email}
            </h2>
          );
        })}
      </div>
    </div>
  );
}
