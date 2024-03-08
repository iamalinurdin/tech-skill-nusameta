'use client'

import Badge from "@/components/Badge"
import Card from "@/components/Card"
import ProgressBar from "@/components/ProgressBar"
import { useQuery } from "react-query"

export default function Page({ params }) {
  const {data: pokemons, isLoading} = useQuery({
    queryFn: () => fetch(`/api/pokemon`).then((response) => response.json()),
    queryKey: ['pokemons']
  })

  return (
    <>
      <main className="container mx-auto py-20">
        <h1 className="text-center mb-5 text-4xl font-semibold">Statistic of {pokemons?.data?.name}</h1>
        <div className="grid grid-cols-3 gap-10">
          <Card>
            <h1 className="border-b-2 border-cyan-400 mb-5 pb-2">Stats</h1>
            {pokemons?.data?.stats.map(item => (
              <>
                <ProgressBar width={item.base_stat} ability={item.stat.name} />
              </>
            ))}
          </Card>
          <Card>
            <h1 className="border-b-2 border-cyan-400 mb-5 pb-2">Type</h1>
            <div className="flex gap-5">
              {pokemons?.data?.types.map(item => (
                <>
                  <Badge name={item.type.name} slot={item.slot} />
                </>
              ))}
            </div>
          </Card>
          <Card>
            <h1 className="border-b-2 border-cyan-400 mb-5 pb-2">Ability</h1>
            <div className="flex gap-5">
              {pokemons?.data?.abilities.map(item => (
                <>
                  <Badge name={item.ability.name} slot={item.slot} />
                </>
              ))}
            </div>
          </Card>
          <Card>
            <h1 className="border-b-2 border-cyan-400 mb-5 pb-2">Moves</h1>
            <div className="flex gap-5 flex-wrap">
              {pokemons?.data?.moves.map(item => (
                <>
                  <Badge name={item.move.name} slot={0} />
                </>
              ))}
            </div>
          </Card>
          <Card>
            <h1 className="border-b-2 border-cyan-400 mb-5 pb-2">Game Indices</h1>
            <div className="flex gap-5 flex-wrap">
              {pokemons?.data?.game_indices.map(item => (
                <>
                  <Badge name={item.version.name} slot={item.game_index} />
                </>
              ))}
            </div>
          </Card>
        </div>

      </main>
    </>
  )
}