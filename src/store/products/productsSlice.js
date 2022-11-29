import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async (thunkAPI) => {
    console.log("getProducts");
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    console.log("result", result);

    return result;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    entities: [],
    loading: false,
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      console.log("getProducts pending");
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      console.log("getProducts done");
      state.loading = false;
      state.entities = payload;
    },
    [getProducts.rejected]: (state) => {
      console.log("getProducts rejected");
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;

export { getProducts };
