import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartVal: {},
  },
  reducers: {
    increment: (state, data) => {
      let articul = data.payload;

      // есть ли что то в объекте cartVal
      if (state.cartVal[articul] === undefined) {
        state.cartVal[articul] = 0;
      }
      state.cartVal[articul]++;
    },
    minus: (state, data) => {
      let articul = data.payload;
      console.log(state.cartVal.cartVal);
      if (state.cartVal[articul] === undefined) {
        state.cartVal[articul] = 0;
      }

      // delete one goods
      if (state.cartVal[articul] > 0) {
        state.cartVal[articul] -= 1;
      }
      // delete to cart
      if (state.cartVal[articul] === 0) {
        state.cartVal[articul] = null;
      }
    },
    del: (state, data) => {
      let articul = data.payload;

      // delete to cart
      if (state.cartVal[articul]) {
        state.cartVal[articul] = undefined;
      }
    },
  },
});

export const { increment, minus, del } = cartSlice.actions;
export const selectCart = (state) => {
  // console.log(state);
  return state.cartVal.cartVal;
};
export default cartSlice.reducer;
