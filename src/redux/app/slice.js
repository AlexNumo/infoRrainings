import { createSlice } from '@reduxjs/toolkit';
import { scheduleOperations } from './operations';

const initialState = {
  name_Coach: [{}],
  isError: false
};

export const scheduleSlice = createSlice({
  name: 'schedule',

  initialState,

  extraReducers: {
    // getAllCoach

    [scheduleOperations.actionGetAllCoach.pending](state) {
      state.isError = false;
    },
    [scheduleOperations.actionGetAllCoach.fulfilled](state, action) {
      state.name_Coach = action.payload;
      state.isError = false;
      // console.log("action: ", action.payload);
    },
    [scheduleOperations.actionGetAllCoach.rejected](state, _) {
      state.name_Coach = null;
      state.isError = true;
    },
  },
});



export const { name_Coach } = scheduleSlice.actions;
