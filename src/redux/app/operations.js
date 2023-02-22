import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientAPI } from 'service/axios.config';

const actionGetAllCoach = createAsyncThunk(
  'schedule/getAllCoach',
  async (payload, thunkAPI) => {
    try {
      const response = await clientAPI.getAllCoach(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const scheduleOperations = {
  actionGetAllCoach,
};
