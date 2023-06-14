/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {
  return (
    <>
      <section className="flex flex-wrap items-center justify-center gap-6 bg-cover  pb-8 pt-6 align-middle sm:container sm:flex-nowrap md:py-10">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-center text-4xl font-bold">
            Do you want to eat?
          </h1>
          <p className="text-center text-gray-400">
            Hello welcome to the shopping website We offer you the best products
          </p>
          <Link href="/products" className={buttonVariants()}>
            Eat Now
          </Link>
        </div>
        <img className="mt-8 w-[100%] sm:w-[50%]" src={"/cake.svg"} alt="" />
      </section>
    </>
  )
}
