import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { CardproductType, productType } from "../../../types/product"
import type { AppState, AppThunk } from "../../store"

export interface cardState {
  total: number
  cardProduct: CardproductType[]
}

const initialState: cardState = {
  total: 0,
  cardProduct: [],
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addProduit: (state, action) => {
      if (state.cardProduct.some((item) => item.id === action.payload.id)) {
        const item = state.cardProduct.find(
          (item) => item.id === action.payload.id
        )
        if (item) {
          item.qte = Number(item.qte) + 1
        }
      } else {
        state.cardProduct.push({
          qte: 1,
          ...action.payload,
        })
      }
      let total = 0
      state.cardProduct.map((p) => {
        total += p.qte
      })
      state.total = total
    },
    addQuantite: (state, action) => {
      const item = state.cardProduct.find(
        (item) => item.id === action.payload.product.id
      )
      if (item) {
        item.qte = action.payload.qte
      }
      let total = 0
      state.cardProduct.map((p) => {
        total += p.qte
      })
      state.total = total
    },
    deleteProduit: (state, action) => {
      state.cardProduct = state.cardProduct.filter(
        (p) => p.id !== action.payload.id
      )
      let total = 0
      state.cardProduct.map((p) => {
        total += p.qte
      })
      state.total = total
    },
  },
})

export const { addProduit, deleteProduit, addQuantite } = cardSlice.actions

export default cardSlice.reducer
