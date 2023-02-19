import { SmallPokemon } from "@/models/pokemon"
import { removeAccents } from "@/utils/strings"
import { FC, useState } from "react"
import UIInput from "../UI/Input"
import PokemonCard from "./Card"
import PokemonWithoutResults from "./WithoutResults"

interface Props {
  pokemons: SmallPokemon[]
}

const Items = ({ pokemons }: Props) => <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
  {
    pokemons.map((e, i) => (
      <PokemonCard key={i} pokemon={e} />
    ))
  }
</div>

const PokemonList: FC<Props> = ({ pokemons }) => {

  const [search, setSearch] = useState('')
  const searchWithoutAccents = removeAccents(search)

  const pokemonsList = pokemons.filter(e => {
    return removeAccents(e.name).includes(searchWithoutAccents)
      || e.id.toString().includes(searchWithoutAccents)
  })
  const hasPokemons = pokemonsList.length > 0

  return (
    <div className="px-10 pt-5 flex flex-col gap-10">
      <div className="w-full text-center">
        <UIInput placeholder="Buscar pokemon" onChange={e => {
          setSearch(e.target.value)
        }} />
      </div>
      {
        hasPokemons 
        ? <Items pokemons={pokemonsList} /> 
        : <PokemonWithoutResults />
      }
    </div>
  )
}

export default PokemonList