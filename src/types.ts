export interface answer {
  season: string
  cusine: string
  anime: string
}
interface cusineDisplay {
  [key: string]: string
}

interface animeDisplay {
  [key: string]: string
}

export interface displayWordMapInterface {
  cusine: cusineDisplay
  anime: animeDisplay
}
