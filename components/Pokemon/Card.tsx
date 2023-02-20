import { SmallPokemon } from '@/models/pokemon'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
    pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
    return (
        <div className='shadow-md flex flex-col items-center gap-2 p-4 duration-300 hover:bg-blue-200'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img}
                className="w-48 h-auto hover:scale-110 duration-300 ease-in-out " />
            <Link href={`/${pokemon.name}`}
            className=' text-sm font-semibold text-emerald-700 mt-4 bg-slate-100 rounded-xl p-2'>
                Click aquí para mas info
            </Link>
        </div>
    )
}

export default PokemonCard