'use client';

import Pagination from "@/components/Pagination";
import PokemonItem from "@/components/PokemonItem";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const {data: pokemons, isLoading} = useQuery({
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=21`).then((response) => response.json()),
    queryKey: ['pokemons', offset]
  })

  return (
    <main className="p-24">
      <h1 className="text-center mb-5 text-4xl font-semibold">Pokemon List</h1>
      {isLoading ? (
        <div className="w-full h-[300px] flex items-center justify-center">
          <h1 className="text-xl font-semibold text-center animate-ping">Please wait</h1>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3 justify-center">
            {pokemons?.results.map((item) => (
              <>
                <PokemonItem name={item.name} url={item.url} />
              </>
            ))}
          </div>
          <div className="mt-10 flex justify-between items-center">
            <p>Show {offset + 1} to {offset + 21}</p>
            <Pagination 
              onClickPreviousHandler={() => setOffset(old => old -= 21)}
              onClickNextHandler={() => setOffset(old => old += 21)}
              nextURL={pokemons?.next}
              previousURL={pokemons?.previous}
            />
          </div>
        </>
      )}
    </main>
  );
}
