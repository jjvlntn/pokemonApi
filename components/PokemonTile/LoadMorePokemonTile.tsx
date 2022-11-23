import { NextPage } from "next"

type LoadMorePokemonTile = {
    fetchfunc: Function
}

export const LoadMorePokemonTile: NextPage<LoadMorePokemonTile> = ({fetchfunc}) => {
    return (
        <div onClick={() => fetchfunc()}>Load more</div>
    )
}