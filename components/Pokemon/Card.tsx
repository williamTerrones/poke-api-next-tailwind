import { SmallPokemon } from '@/models/pokemon'
import { FC } from 'react'

interface Props {
    pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
    return (
        <div className='shadow-md flex flex-col items-center gap-2 p-4 duration-300 hover:bg-blue-200 cursor-pointer'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img}
                className="w-48 h-auto hover:scale-110 duration-300 ease-in-out " />
            <a href={pokemon.url} target="blank"
            className=' text-sm font-semibold text-emerald-700 mt-4 bg-slate-100 rounded-xl p-2'>
                Click aquí para mas info
            </a>
        </div>
    )
}

export default PokemonCard