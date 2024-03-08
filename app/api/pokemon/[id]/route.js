export async function GET(request, { params }) {
  const id = params.id;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json();

  return Response.json({data})
}