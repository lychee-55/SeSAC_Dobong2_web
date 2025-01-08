import { Component } from 'react';

export default class PracStateClass extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <p>숫자 +/- 하기</p>
        <div>{number}</div>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 2 });
          }}
        >
          -2
        </button>
      </div>
    );
  }
}
