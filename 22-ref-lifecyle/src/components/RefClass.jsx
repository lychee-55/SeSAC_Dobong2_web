import React, { Component } from 'react';

// 콜백함수로 ref
export class RefClass1 extends Component {
  handleFocus = () => {
    console.log(this.myInput); // <input type="text />
    console.log(this.myInput.value);
    this.myInput.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼 클릭시 input에 focus처리</p>
        <p>ref 속성에 콜백 전달</p>
        <p>유효성 검사때 틀린정보에 focus를 주면 사용자에게 조금 더 편리함.</p>
        <input
          type="text"
          ref={ref => {
            // 아래 this는 class를 의미함.
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

// createRef로 ref
export class RefClass2 extends Component {
  // React 안에있는 createRef()를 사용해서 ref 객체를 사용
  myInput = React.createRef();

  handleFocus = () => {
    console.log(this.myInput.current);
    console.log(this.myInput.current.value);
    this.myInput.current.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼 클릭시 input에 focus처리</p>
        <p>createRef() 를 통해서 ref 객체 생성</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
