function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back(txt) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(txt);
      resolve(txt);
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}
/*
function exec() {
  call("kim")
    .then((name) => {
      console.log(name + "반가워");
      return back("back");
    })
    .then((txt) => {
      console.log(txt + "을 실행했구나");
      return hell();
    })
    .then((msg) => {
      console.log("여기는" + msg);
    });
}

exec();
*/
async function exec() {
  let user = await call("kim");
  console.log(user + "님 환영합니다.");
  let txt = await back("back");
  console.log(txt + "을 실행했구나");
  let msg = await hell("callback hell");
  console.log("여기는" + msg);
}
exec();
