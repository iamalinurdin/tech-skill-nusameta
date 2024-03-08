export async function GET(request, {params}) {
  const searchParams = request.nextUrl.searchParams;
  const offset = searchParams.get('offset');

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json();

  console.log(data)

  return Response.json({data})
}