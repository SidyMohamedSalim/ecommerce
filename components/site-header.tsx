"use client"

import Link from "next/link"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import { useAppSelector } from "../src/hooks"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const total = useAppSelector((state) => state.card.total)
  console.log(total)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center space-x-4 sm:container sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.links.card} rel="noreferrer">
              <div className="ml-4 flow-root lg:ml-6">
                <Link
                  href={siteConfig.links.card}
                  className="group -m-2 flex items-center p-2"
                >
                  <ShoppingBagIcon
                    className="h-6 w-6 shrink-0 "
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium">{total}</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
