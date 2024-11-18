// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// const { reject } = require("async");

// function back(cb) {
//   setTimeout(function () {
//     console.log(back);
//     cb(back);
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb("callback hell");
//   }, 1000);
// }

// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (message) {
//       console.log("여기는" + message);
//     });
//   });
// });

function callB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      name = "kim";
      console.log(name);
      resolve();
    }, 1000);
  });
}

function exec() {
  callB(name).then((result) => {
    console.log(result + "반가워");
  });
}

exec();
