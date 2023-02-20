import { Pokemon } from "@/models/pokemon"
import { FC } from "react"
import PokemonSpriteImage from "./Image"

interface Props {
    pokemon: Pokemon
}

const RenderSprite = ({src}:{src:string}) => {

    if(!src) return null

    return <PokemonSpriteImage src={src} />

}

const PokemonSprite: FC<Props> = ({ pokemon: { sprites } }) => {

    const {
        back_default,
        back_female,
        back_shiny,
        back_shiny_female,
        front_default,
        front_female,
        front_shiny,
        front_shiny_female,
    } = sprites

    return (
        <>
            <h2 className="text-white text-2xl">Sprites</h2>
            <div className="flex flex-wrap">
                <RenderSprite src={back_default} />
                <RenderSprite src={back_female} />
                <RenderSprite src={back_shiny} />
                <RenderSprite src={back_shiny_female} />
                <RenderSprite src={front_default} />
                <RenderSprite src={front_female} />
                <RenderSprite src={front_shiny} />
                <RenderSprite src={front_shiny_female} />
            </div>
        </>
    )
}

export default PokemonSprite