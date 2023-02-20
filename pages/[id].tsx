import PokemonInfo from "@/components/Pokemon/Info";
import { Pokemon } from "@/models/pokemon";
import { getPokemon } from "@/services/pokemon";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";

interface Props {
    pokemon: Pokemon
}

const IdPage: FC<Props> = ({ pokemon }) => {
    return (
        <div>
            <PokemonInfo pokemon={pokemon} />
        </div>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: 'blocking'
    }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }

    const pokemon = await getPokemon(id)

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400,
    }
}


export default IdPage