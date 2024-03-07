export async function GET() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json();

  console.log(data)

  return Response.json({data})
}