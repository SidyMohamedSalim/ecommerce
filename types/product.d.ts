export type productType = {
id: number,
    name: string?,
    price: string?,
    href: string?,
    breadcrumbs:  [
      { id: int, name: string, href: string },
      { id: int, name: string, href: string },
    ],
    images: [
      {
        src: string,
        alt: string,
      },
      {
        src: string
        alt: string,
      },
      {
        src: string,
        alt: string,
      },
      {
        src: string,
        alt: string,
      },
    ],
    colors: [
      { name: string, class: string, selectedClass: string },
      { name: string, class: string, selectedClass: string },
    ],
    sizes: [
      { name: string, inStock: boolean },
      { name: string, inStock: boolean },
      { name: string, inStock: boolean },
      { name: string, inStock: boolean },
      { name: string, inStock: boolean },
      { name: string, inStock: boolean },
      { name: string, inStock: boolean },
      { name: string, inStock: boolean },
    ],
    description:string,
    highlights: string[],
    details:string,
  }
