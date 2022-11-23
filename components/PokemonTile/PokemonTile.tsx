import { NextPage } from "next"
import Link from "next/link"

type PokemonTile = {
    name: string
}

export const PokemonTile: NextPage<PokemonTile> = ({name}) => {
    return (
        <Link href={`/pokemon/${name}`}>
        <div>{name}</div>
        </Link>
    )
}