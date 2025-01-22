import { combineReducers } from '@reduxjs/toolkit';
import { isDataReducer } from './module/isDataReducer';
import { counterReducer } from './module/counterReducer';
import { bankReducer } from './module/practice/bankReducer';

// 2. src.store/index.js,
// store/index.js, 여러개의 reducer를 통합하는 역할
const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  bank: bankReducer,
  // 만약 전역 관리 state 가 추가되면 이 곳에도 추가
});

// 2-2. 내보내기
// src/index.js에서 쓰일 예정
export default rootReducer;
