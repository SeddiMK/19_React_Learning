import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartVal: {},
  },
  reducers: {
    increment: (state, data) => {
      let articul = data.payload;
      if (state.cartVal[articul] === undefined) {
        state.cartVal[articul] = 0;
      }

      state.cartVal[articul]++;
    },
  },
});

export const { increment } = cartSlice.actions;
export const selectCart = (state) => {
  // console.log(state);
  return state.cartVal.cartVal;
};
export default cartSlice.reducer;
