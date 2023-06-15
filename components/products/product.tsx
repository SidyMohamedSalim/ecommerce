/* eslint-disable @next/next/no-img-element */
"use client"

import { FormEvent, useState } from "react"
import { addProduit } from "@/src/features/card/cardSclice"
import { product } from "@prisma/client"
import { useDispatch } from "react-redux"

const Product = ({ products }: { products: product }) => {
  const dispatch = useDispatch()

  const onSubmite = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addProduit(products))
  }

  return (
    <div className="mx-auto my-16 flex items-center border pt-14 align-middle xl:p-6">
      {products && (
        <div className="mx-auto flex justify-evenly  max-xl:flex-wrap ">
          {/* img product */}
          <div className="">
            <img className="rounded-sm" src={products.image} alt="" />
          </div>
          {/* desc */}
          <div className="px-6 max-xl:max-w-[45rem] max-xl:px-10 max-xl:py-5 xl:max-w-xl">
            <h1 className="pb-6 text-2xl font-bold">{products.name}</h1>
            <p className="opacity-90">{products.description}</p>

            <h1 className="py-6 text-2xl font-bold">${products.price}</h1>
            <form onSubmit={onSubmite}>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
