import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function StudentsPage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [searchname, setSearchName] = useSearchParams();
  console.log(searchname.get('name'));
  const newStudent = searchname.get('name');
  //   console.log(name);
  return (
    <div>
      <div>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span>입니다.
      </div>
      <br />
      {newStudent && (
        <div className="new">
          실제 이름은 <span style={{ color: 'red' }}>{newStudent}</span>
        </div>
      )}
      <button onClick={() => navigate(-1)}>이전페이지로</button>
    </div>
  );
}
