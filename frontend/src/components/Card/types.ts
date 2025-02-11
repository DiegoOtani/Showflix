export type CardProps = {
  id: number
  imgUrl: string
  title: string
  language: string
  rating: number | null
  onClick?: (showId: number) => void
  selected: boolean
};