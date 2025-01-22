function printSome<T>(x: T, y: T) {
  console.log('x와y', x, y);
  return x;
}
printSome<number>(1, 2);
printSome<string>('1', '2');
printSome<boolean>(false, true);
// printSome<boolean>(false, "true");

// 여러 형 받기
function printSome2<T, K>(x: T, y: K): T {
  console.log('x와 y', x, y);
  return x;
}

printSome2<number, string>(1, 'hello');

// 배열 여러형태로 받기
// 지향하는 버젼
function arrLength(arr: any[]): number {
  return arr.length;
}
function getValue(val: any[]): any {
  return val;
}
// generic한 버젼
function arrLength2<T>(arr: T[]): number {
  return arr.length;
}
function getValue2<T>(val: T): T {
  return val;
}

console.log(arrLength2<string>(['a', 'b']));
console.log(arrLength2<string | number>(['a', 'b', 1, 2]));

console.log(getValue2<string[]>(['a', 'b']));

// interface generic 사용
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: 'apple',
  createAt: new Date('2023-10-23'),
  option: 'black',
};
console.log(iphone15);

type IphoneOption = {
  color: string;
  storage: number;
};
const iphone16: Phone<IphoneOption> = {
  company: 'apple',
  createAt: new Date('2023-10-06'),
  option: {
    color: 'sliver',
    storage: 256,
  },
};
console.log(iphone16);
