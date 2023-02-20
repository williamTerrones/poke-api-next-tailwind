import { Pokemon } from '@/models/pokemon'
import Link from 'next/link'
import { FC } from 'react'
import PokemonSprite from '../Sprite'

interface Props {
    pokemon:Pokemon
}

const PokemonInfo: FC<Props> = ({pokemon}) => {
  return (
    <div className='w-screen h-screen bg-yellow-400 p-5'>
      <Link href="/"
      className='text-white cursor-pointer bg-blue-300 w-20 text-center'>
        Regresar
      </Link>
      <h1 className='text-center text-white text-4xl'>
        {pokemon.name}
      </h1>
      <PokemonSprite pokemon={pokemon} />
    </div>
  )
}

export default PokemonInfo