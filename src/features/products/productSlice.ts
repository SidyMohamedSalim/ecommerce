import { product } from "@prisma/client"
import { createSlice } from "@reduxjs/toolkit"

export interface cardState {
  products: product[]
}

const initialState: cardState = {
  products: [],
}

export const productSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addAllProducts: (state, action) => {
      state.products.push(action.payload)
    },
  },
})

export const { addAllProducts } = productSlice.actions

export default productSlice.reducer
