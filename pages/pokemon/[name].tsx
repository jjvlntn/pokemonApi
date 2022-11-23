import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { queryPokemon } from "../../utils/query";
import  Image  from 'next/image'
import Style from '../../styles/Pokemon.module.css';

const SinglePokemonPage = () => {
    const router = useRouter();
    const { name } = router.query;
    const [pokemon, setPokemon] = useState<any>(null)

    useEffect(() => {
        async function fetchPokemon(){
            if(typeof name === 'string'){
                // console.log(name)
                const result = await queryPokemon.fetchSinglePokemon(name);
                console.log(result)
                setPokemon(result);
            }
        }

        fetchPokemon()
    },[name])

    if(!pokemon){
        return <div>Loading...</div>
    }

    return (
        <div className={Style.pokemonInfoContainer}>
            <h1>{pokemon.name}</h1>
            <div className={Style.pokemonImage}>
                <Image 
                    src={pokemon.sprites.front_default}
                    alt='image'
                    fill={true}
                />
            </div>
        </div>
    )
}

export default SinglePokemonPage;