import { createAsyncThunk } from '@reduxjs/toolkit';

// Fetch products from a JSON file
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch('/products.json'); // The JSON file is in the public folder
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    return response.json(); // Return parsed JSON data
  }
);