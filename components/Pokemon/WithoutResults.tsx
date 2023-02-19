
const PokemonWithoutResults = () => {
    return (
        <div className=" bg-red-400 text-white text-center p-10">
            <p>No se encontraron pokemones que coincidan con la búsqueda</p>
            <span className=" text-md font-thin">Prueba buscar por otro nombre</span>
        </div>
    )
}

export default PokemonWithoutResults