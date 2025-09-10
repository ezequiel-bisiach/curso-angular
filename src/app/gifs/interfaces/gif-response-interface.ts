import { GifInterface } from "./git-interface"

export interface GifResponseInterface {
  info: GifResponseInfoInterface,
  results: GifInterface[]
}

interface GifResponseInfoInterface {
  count: number,
  pages: number
  next?: string
  prev?: string
}
