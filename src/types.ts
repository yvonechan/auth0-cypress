export interface answerInterface {
  season: string
  cusine: string
  anime: string
}
interface cusineDisplayInterface {
  [key: string]: string
}

interface animeDisplayInterface {
  [key: string]: string
}

export interface displayWordMapInterface {
  cusine: cusineDisplayInterface
  anime: animeDisplayInterface
}
