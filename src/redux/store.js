import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
