"use client"

import { PropsWithChildren, createContext, useContext, useState } from "react"

import { CardproductType, productType } from "../../types/product"

type CardContextType = {
  cardProducts: CardproductType[]
  total: number
  setTotal: (total: number) => void
}

const CardContext = createContext<CardContextType | null>(null)

export default function CardProvider({ children }: PropsWithChildren) {
  // `value` est le contexte que l'on va passer à `CardContext.Provider`
  const [total, setTotal] = useState(0)

  const value: CardContextType = {
    cardProducts: [],
    total,
    setTotal,
  }

  return (
    // `value` doit correspondre à `CardContext`
    <CardContext.Provider value={value}>{children}</CardContext.Provider>
  )
}

export const useCardProduct = () => {
  const context = useContext(CardContext)

  if (context === null) {
    throw new Error("useCardProduct doit être utilisé dans un ThemeProvider")
  }

  // On est sûr que context n'est pas null -> `useContext` est sécurisé ✅
  // Ce qui nous permettera de ne pas avoir besoin de faire des vérifications
  return context
}
