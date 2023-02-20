import pokeApi from "@/api/pokeApi";
import { Pokemon } from "@/models/pokemon";

export const getPokemon = async (id:string) => {

    try {

        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }

    } catch (error) {
        return null;
    }

}