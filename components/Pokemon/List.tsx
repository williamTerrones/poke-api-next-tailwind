import { SmallPokemon } from "@/models/pokemon"
import { FC } from "react"
import PokemonCard from "./Card"

interface Props {
    pokemons:SmallPokemon[]
}

const PokemonList:FC<Props> = ({pokemons}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
            pokemons.map((e,i) => (
                <PokemonCard key={i} pokemon={e} />
            ))
        }
    </div>
  )
}

export default PokemonList