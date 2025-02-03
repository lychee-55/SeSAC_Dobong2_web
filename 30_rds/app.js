const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = 8080;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userModel = require('./models/User');
// console.log(process.env.DB_HOST);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
);

const User = userModel(sequelize);

app.get('/api', (req, res) => {
  res.send('hello!');
});

app.post('/api/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    console.log(user);
    res.json(user);
  } catch (err) {
    res.send('서버에러!');
    console.log(err);
  }
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('테이블 생성 완료!');
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log('sequelize error!!', err);
  });

/* 
- 로컬에서 RDS로 연결 시도시 timeout이 걸림. (일반적으론 포트가 연결이 안되서 실패)
  => RDS를 만들 때 public access를 접근 거절해 놓아서 안됨.
  즉 , 3306 포트로 인바운드 설정을 허용해놨음에도 접근이 되지 않는 이유는
  public access를 허용하지 않았기 때문.
- EC2에서만 RDS로 접근할 수 있음.
- 개발환경에서의 DB는 로컬 DB, 배포할 때의 DB는 RDS로 설정!
*/
