import { useForm } from 'react-hook-form';

export default function PracHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = data => {
    console.log('유효한 데이터', data);
  };
  const onInValid = err => {
    console.log('유효하지 않은 데이터', err);
  };

  const userRegister = register('username');

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <h2>Hook Form 만들기</h2>
      <input
        type="text"
        placeholder="이름을 작성하세요.."
        {...register('username', {
          required: '이름은 필수 항목 입니다.',
        })}
      />
      {errors.username?.message}
      <br />
      <input
        type="number"
        placeholder="나이를 작성하세요"
        {...register('age', {
          required: '나이를 작성해주세요.',
          min: {
            message: '0 이상의 숫자만 입력 가능합니다.',
            value: 0,
          },
        })}
      />
      {errors.age?.message}
      <br />
      <button>제출</button>
    </form>
  );
}
