/* eslint-disable @next/next/no-img-element */
import { url } from "inspector"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import CategoresProducts from "../components/products/categorie"

export default function IndexPage() {
  return (
    <>
      <section className="container flex flex-wrap items-center justify-center gap-6 pb-8 pt-6 align-middle sm:flex-nowrap md:py-10">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-center text-4xl font-bold">
            The best way for the shopping
          </h1>
          <p className="text-center text-gray-400">
            Hello welcome to the shopping website We offer you the best products
          </p>
          <Link href="/docs/getting-started" className={buttonVariants()}>
            Shop-Now
          </Link>
        </div>
        <img className="mt-8 w-[100%] sm:w-[50%]" src={"/shop.svg"} alt="" />
      </section>
      <CategoresProducts nameCat="New Arrivals" />
    </>
  )
}
