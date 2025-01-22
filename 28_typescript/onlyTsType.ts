// tuple: 배열의 개수와 데이터 타입 순서를 정하는 타입.
let drink: [string, string];
drink = ['cola', '콜라'];

let drink2: [string, string, number] = ['cola', '콜라', 6];

drink2[0] = '사이다';
console.log(drink2);

// readonly 옵션: 타입과 순서를 완벽히 고정
// 추후 수정 불가능
let drink3: readonly [string, string] = ['cola', '콜라'];
// drink3[0] = '사이다'; // error!!

// ============= enum ===============
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  choco, // 0
  vanilla, // 1
  strawberry, // 2
  kiwi = 'kiwi', // 권장하지 않음. 종류대로 enum을 작성하는 것을 추천함.
}

console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.strawberry);
console.log(Cake.kiwi);

// 사용자 정의 타입

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'lychee',
  isPassed: true,
};

type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';

interface 야구부 extends Student {
  //   Student에서 상속받아 온 정보
  //   name: string;
  //   isPassed: boolean;
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number; // 없어도 되는 값은 ? 처리
  [grade: number]: Score; // 추가해야 하지만 몇개를 추가할 지 모르는 경우 이런 방식으로 작성함.
}

const otani: 야구부 = {
  name: 'otani',
  isPassed: true,
  position: 'pitcher',
  weight: 95,
  height: 193,
  backNumber: 17,
  1: 'A',
  2: 'C',
};

// interface 접근 방법
console.log(otani);
console.log(otani['1']);
// interface 수정 방법
otani['1'] = 'A+'; // 수정 가능
otani.position = '투수';
// otani.backNumber=11 // readonly 수정 불가

interface Calc {
  (a: number, b: number): number;
}

const sum: Calc = (num1: number, num2: number) => {
  return num1 + num2; // number를 리턴
};

interface Toy {
  name: string;
  start(): void; //함수 중 리턴타입이 없을 경우 void 타입.
}
interface Car {
  name: string;
  color: string;
  price: number;
}

// 교차 타입 & >> Toy와 Car의 정보를 모두 만족해야 함.
let toyCar: Toy & Car = {
  name: '타요',
  color: '파랑색',
  price: 50000,
  start() {
    console.log(this.name, '의 가격은', this.price, '입니다.');
  },
};

toyCar.start();

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: 'daniel',
  gender: 'F',
  age: 21,
};

enum GenderEnum {
  FEMALE = 'Female',
  MALE = 'Male',
}

// type Gender1 = 'Female' | 'Male';
type Gender2 = GenderEnum.FEMALE | GenderEnum.MALE;

type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender2;
};

let albert: Person2 = {
  name: 'Albert',
  like: ['car'],
  gender: GenderEnum.MALE,
};

console.log(albert.gender);
console.log(daniel.age);
