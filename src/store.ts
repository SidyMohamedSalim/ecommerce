import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"

import cardSlice from "./features/card/cardSclice"
import productSlice from "./features/products/productSlice"

export function makeStore() {
  return configureStore({
    reducer: { card: cardSlice, products: productSlice },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
