import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './fetchProducts';

const initialState = [];
const productSlice = createSlice({
     name: "product",
     initialState: { products: initialState },
     loading: false,
     error: null,
     reducers: {},
     extraReducers: (builder) => {
          builder.addCase(fetchProducts.pending, (state) => {
               state.loading = true;
               state.error = null;
          }).addCase(fetchProducts.fulfilled, (state, action) => {
               state.loading = false;
               state.products = action.payload;
          }).addCase(fetchProducts.rejected, (state, action) => {
               state.loading = false;
               state.error = action.error.message;
          });
     }
});
export default productSlice;


