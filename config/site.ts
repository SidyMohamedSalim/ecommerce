export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Afia-Cake",
  description: "Beautifull site web  e-commerce using Next Js.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "All Products",
      href: "/products",
    },
    {
      title: "About",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    card: "/card",
  },
}
