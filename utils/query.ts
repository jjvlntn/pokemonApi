type ListofPokemon = {
    count: number, 
    next: string,
    prev: string | null,
    results: PokemonInfoShort[]
}


type PokemonInfoShort = {
    name: string,
    url: string
}

class QueryPokemon {

    URL: string = 'https://pokeapi.co/api/v2/pokemon/'

    async fetchListByPage(url?: string): Promise<ListofPokemon>{
        const queryUrl = url ?? this.URL;
        const results: ListofPokemon = await fetch(this.URL).then(response => response.json())
        console.log(results)
        return results
    }

    async fetchSinglePokemon(name: string) {
        const queryUrl = this.URL + name;
        console.log(queryUrl);
        const result = await fetch(queryUrl).then(response => response.json())
        console.log(result, 'single');
        return result
    }
}

export const queryPokemon = new QueryPokemon()