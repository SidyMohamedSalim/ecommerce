export type productType = {
id: number,
    name: string,
    price: string,
    href: string?,
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
      { name: string?, class: string?, selectedClass: string? },
    ] ,
    description:string,
    highlights: string[]?,
    details:string?,
  }
