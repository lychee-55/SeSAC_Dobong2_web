import { Component } from 'react';

export default class ClassState extends Component {
  //클래스형애서는 state가 객체로 반영
  // render() 한수 위에서 state를 선언
  state = {
    banana: '바나나',
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        <p>{banana}</p>
        <button
          onClick={() => {
            this.setState({ banana: 'banana' });
          }}
        >
          영어로 변경!(class 형)
        </button>
      </div>
    );
  }
}
