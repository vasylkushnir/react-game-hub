import Platform from "./Platform"
import Genre from "./Genre"
import Publisher from "./Publisher"

export default interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform } []
  metacritic: number
  rating_top: number
  rating: number
  slug: string
  description_raw: string
  genres: Genre []
  publishers: Publisher []
}
