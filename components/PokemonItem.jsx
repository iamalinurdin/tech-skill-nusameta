import ButtonLink from "./ButtonLink";

export default function PokemonItem({name, url}) {
  const sanitizeURL = (url) => {
    const split = url.split('/')

    return split[split.length - 2]
  }

  return (
    <article className="border-2 px-8 py-6 w-full border-cyan-400 hover:bg-cyan-900 transition duration-500 rounded-lg flex justify-between items-center">
      <p className="font-semibold">{name}</p>
      <ButtonLink href={`/pokemon/${sanitizeURL(url)}`}>Show</ButtonLink>
    </article>
  );
}