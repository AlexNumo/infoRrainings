import { combineReducers } from '@reduxjs/toolkit';
import { scheduleSlice } from './app';

export const rootReducer = combineReducers({
  auth: scheduleSlice.reducer,
});
