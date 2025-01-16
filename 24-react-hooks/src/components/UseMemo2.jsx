import { useEffect, useMemo, useState } from 'react';

export default function UseMemo2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   const location = {
  //     country: isKorea ? 'Korea' : 'Abroad',
  //   };

  const location = useMemo(() => {
    return { country: isKorea ? 'Korea' : 'Abroad' };
  }, [isKorea]);

  useEffect(() => {
    console.log('location이 변경될 때마다 실행됩니다.🔥');
  }, [location]);
  return (
    <>
      <input
        type="number"
        onChange={e => setNumber(e.target.value)}
        value={number}
      />
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>나라 변경</button>
    </>
  );
}
