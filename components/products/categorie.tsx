"use client"

/* eslint-disable @next/next/no-img-element */
import { use } from "react"
import Link from "next/link"
import { FileBadge } from "lucide-react"

import { productType } from "@/types/product"
import { Button, buttonVariants } from "@/components/ui/button"

export default function CategoresProducts({
  nameCat,
  products,
}: {
  nameCat: string
  products: productType[]
}) {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight ">{nameCat}</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  lg:h-80">
                    {product.images[0] && (
                      <img
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    )}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm">
                        <Link href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </Link>
                      </h3>
                      <h3 className="text-sm">
                        <Button
                          onClick={() => console.log("add to cart")}
                          className={"rounded-md  "}
                          variant={"secondary"}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          More...
                        </Button>
                      </h3>
                    </div>
                    <p className="text-sm font-medium">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
