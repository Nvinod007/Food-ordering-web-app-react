import { createSlice, current } from "@reduxjs/toolkit";   

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items.pop()
    },
    clearCart: (state) => {
      // state.items = []
      // * Below code don't work have to read about immer
      // * we should mutate the state 
      // * assigning something to state wont work as expected
      console.log('state', current(state));
      state = []
      console.log('state', state);
    }
  }
})

export const { addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;