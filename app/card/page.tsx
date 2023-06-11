/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client"

import Link from "next/link"
import { addQuantite, deleteProduit } from "@/src/features/card/cardSclice"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  PROMO,
  TVA,
  totalProduitCardPrix,
  totalProduitCardPrixTTC,
} from "../../src/admin/productManage"
import { useAppDispatch, useAppSelector } from "../../src/hooks"

export default function Card() {
  const cardProducts = useAppSelector((state) => state.card.cardProduct)
  console.log("produit", cardProducts)
  const dispactch = useAppDispatch()

  const totalProduitCardPrice = totalProduitCardPrix({ cardProducts })
  const totalPriceCardTTC = totalProduitCardPrixTTC({ cardProducts })

  return (
    <div className="m-7 mx-auto flex max-w-5xl flex-col justify-center rounded-md border p-4 px-5 py-9">
      <h1 className="mb-4 mt-6 text-2xl font-bold">Shopping Card</h1>

      {/* card product */}

      <div className="">
        {cardProducts.length === 0 ? (
          <h1 className="text-red-600">Card Empty</h1>
        ) : (
          cardProducts.map((product) => (
            <div className="relative my-6 flex justify-between border-t-2 pt-4 align-middle">
              {/* product infos */}
              <div className=" flex align-top">
                <div>
                  <img
                    className="h-28 w-32 rounded-sm"
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                  />
                </div>
                <div className=" ml-3">
                  <h1 className="text-sm">{product.name}</h1>
                  <p className="text-xs">whte</p>
                  <div className="absolute bottom-0 flex align-top text-sm">
                    <div className="mr-2 text-green-400">
                      <Check />
                    </div>
                    <h3>In Stock</h3>
                  </div>
                </div>
              </div>
              {/* Product quantity */}
              <div>
                <div>
                  <h2 className="mb-4">quantity :</h2>
                  <input
                    onChange={(e) => {
                      dispactch(
                        addQuantite({ product, qte: Number(e.target.value) })
                      )
                    }}
                    className="w-16 rounded-md border px-2"
                    type="number"
                    defaultValue={String(product.qte)}
                    min="1"
                  ></input>
                </div>
              </div>
              {/* Price product */}
              <div className="font-bold">
                <h1>${product.price}</h1>
              </div>
              <div className="mt-2 flex items-center justify-center">
                <Button
                  variant={"outline"}
                  onClick={() => {
                    dispactch(deleteProduit(product))
                  }}
                  className="text-sm font-bold"
                >
                  X
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* card total price */}

      <div className="mx-auto my-5 flex w-full  max-w-xl flex-col items-end justify-end  align-middle sm:min-w-[400px]">
        <div className="my-2 flex w-full  justify-between rounded-sm bg-gray-100  p-2 dark:bg-gray-700">
          <h1 className="">SubTotal</h1>
          <h2>${totalProduitCardPrice}</h2>
        </div>

        <div className="my-2 flex w-full  justify-between rounded-sm bg-gray-100  p-2 dark:bg-gray-700">
          <h1>Win</h1>
          <h2>{PROMO * 100}%</h2>
        </div>

        <div className="my-2 flex w-full  justify-between rounded-sm bg-gray-100  p-2 dark:bg-gray-700">
          <h1>Tax</h1>
          <h2>{TVA * 100}%</h2>
        </div>

        <div className="my-2 flex w-full  justify-between rounded-sm bg-gray-100  p-2 dark:bg-gray-700">
          <h1 className="font-bold">Order Total</h1>
          <h2 className="font-bold">${totalPriceCardTTC} </h2>
        </div>

        <Button className="mb-5 mt-10  w-full  justify-center rounded-sm p-2 ">
          Commend Now
        </Button>
      </div>
    </div>
  )
}
