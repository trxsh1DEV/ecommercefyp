// cart.js (redux)
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (item) => item._id === action.payload._id,
      );

      if (existingProduct) {
        console.log('Este produto já está no carrinho.');
        return;
      }
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    increaseQuantity: (state, action) => {
      const index = state.products.findIndex(
        (item) => item._id === action.payload,
      );
      if (index !== -1) {
        state.products[index].quantity += 1;
        state.quantity += 1;
        state.total += state.products[index].price;
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.products.findIndex(
        (item) => item._id === action.payload,
      );
      if (index !== -1 && state.products[index].quantity > 1) {
        state.products[index].quantity -= 1;
        state.quantity -= 1;
        state.total -= state.products[index].price;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
