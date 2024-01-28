import { ProductType } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

type Iproduct = {
    amount: number,
    total: number,
    cartItems: ProductType[]
}

const initialState: Iproduct = {
  cartItems: [],
  amount: 0,
  total:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cartItems.find((item: ProductType) => {
        return item.id === action.payload.id;
      });
      cartItem
        ? (cartItem.amount = cartItem.amount +1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    deleteFomCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
    },
    reset: (state) => {
      state.cartItems = [];
    },
    
    increament: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload;
      });
      state.cartItems[itemIndex].amount += 1;
    },
    decreament: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload;
      });
      if (state.cartItems[itemIndex].amount > 1) {
        state.cartItems[itemIndex].amount -= 1;
      }
    },
    calculate: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
        amount += item.amount;
      });
      state.total = total;
      state.amount = amount
    },
  },
});

export const { addToCart, deleteFomCart, reset, increament, decreament, calculate } = cartSlice.actions;
export default cartSlice.reducer;
