import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "authentication",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload.id);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item !== action.payload.id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
