export async function GET(request, { params }) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json();

  return Response.json({data})
}