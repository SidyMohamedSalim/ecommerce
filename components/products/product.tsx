/* eslint-disable @next/next/no-img-element */
"use client"

import { FormEvent, useState } from "react"
import { addProduit } from "@/src/features/card/cardSclice"
import { product } from "@prisma/client"
import { useDispatch } from "react-redux"

const Product = ({ products }: { products: product }) => {
  const dispatch = useDispatch()
  if (!products) return <div>Not Found</div>

  const onSubmite = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addProduit(products))
  }

  return (
    <div>
      {products && (
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={products.image}
                alt={products.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={products.image}
                  alt={products.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={products.image}
                  alt={products.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={products.image}
                alt={products.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <form className="mt-10" onSubmit={(e) => onSubmite(e)}>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight  sm:text-3xl">
                {products.name}
              </h1>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base ">{products.description}</p>
                </div>
              </div>

              {products.description && (
                <div className="mt-10">
                  <h2 className="text-sm font-medium ">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-400">
                      {products.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
