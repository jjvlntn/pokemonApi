import { useInfiniteQuery } from "@tanstack/react-query"
import { queryPokemon } from "../../utils/query"
import { LoadMorePokemonTile } from "../PokemonTile/LoadMorePokemonTile"
import { PokemonTile } from "../PokemonTile/PokemonTile"

export const ListOfPokemon = () => {

    const { data, isLoading, isFetching, isSuccess, fetchNextPage, hasNextPage} = useInfiniteQuery({
        queryKey: ['listOfPokemon'],
        queryFn: ({pageParam = undefined}) => queryPokemon.fetchListByPage(pageParam),
        getNextPageParam: (lastPage, allPages) => lastPage.next,
    })

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(isSuccess){
        console.log(data);
    }

    return (
        <div>
            {data?.pages.map((page) => (
                page.results.map((pokemon, index) => {
                    return <PokemonTile key={index} name={pokemon.name} />
                })
            ))}
            {!isFetching && <LoadMorePokemonTile fetchfunc={fetchNextPage}/>}
        </div>
    )
}