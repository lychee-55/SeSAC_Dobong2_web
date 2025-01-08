import { Component } from 'react';

export default class HandleEx extends Component {
  state = {
    HW: 'Hello World!',
  };
  render() {
    const { HW } = this.state;
    return (
      <div>
        <h2>{HW}</h2>
        <button
          onClick={() => {
            this.setState({ HW: 'Goodbye World!!' });
          }}
        >
          로그아웃
        </button>
      </div>
    );
  }
}
