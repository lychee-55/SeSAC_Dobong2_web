// 기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name); // 매개변수는 name을 받아주고 있음.
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

// // 콜백 함수 실행
// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     // cb을 받아주고 있기에 비움.
//     console.log(txt + "을 실행했구나");
//     hell(function (msg) {
//       console.log("여기는" + msg);
//     });
//   });
// });

function callPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // then으로 resolve값으로 넘겨줘야 하기 때문에
    }, 1000);
  });
}

function backPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellPromise() {
  //두번째 인자를 안 쓸 때는 rej 생략 가능
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// // then ~ catch
// callPromise("kim")
//   .then((result) => {
//     // 리턴을 어떻게 하냐에 따라서 다음 then에 사용가능
//     console.log(result + "반가워");
//     return backPromise(); // 인자가 없기때문에 빈칸으로 남김.
//   })
//   .then((txt) => {
//     // txt는 이전 then의 리턴값(backpromise의 리턴값) = "back"
//     console.log(txt + "실행했구나");
//     return hellPromise();
//   })
//   .then((msg) => {
//     console.log("여기는 " + msg);
//   });

// async/await 는 실행 함수를 만들어 줘야함.
async function execute() {
  const name = await callPromise("lychee"); // resolve값이 name에 들어감.
  console.log(name + "반가워");
  const back = await backPromise();
  console.log(back + "을 실행했구나");
  const hell = await hellPromise();
  console.log("여기는" + hell);
}

execute();
