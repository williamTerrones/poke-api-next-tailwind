import { FC } from "react"

interface Props {
    src:string
}

const PokemonSpriteImage: FC<Props> = ({src}) => {
  return (
    <img src={src} alt="Sprite" width={100} height={100} />
  )
}

export default PokemonSpriteImage