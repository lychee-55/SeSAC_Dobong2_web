import { useState } from 'react';
import { UserContext } from '../../context/UserContext';

// App.js에서 state 관리를 하는것이 아닌,
// 해당 state를 관리할 Provider를 따로 선언언
export default function UserProvider({ children }) {
  const [name, setName] = useState('');
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
