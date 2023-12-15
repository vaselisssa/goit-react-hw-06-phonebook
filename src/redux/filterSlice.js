import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,

  reducers: {
    setFilter: {
      prepare: value => {
        return {
          payload: value,
        };
      },
      reducer: (state, action) => {
        state.value = action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
