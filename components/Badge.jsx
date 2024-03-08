export default function Badge({name, slot = 0}) {
  return (
    <article className="px-2 py-1 bg-green-500 rounded relative">
      {name}
      {slot != 0 && (
        <span className="bg-red-900 text-xs px-2 py-1 rounded-full absolute top-[-10px] right-[-10px] z-10">
          {slot}
        </span>
      )}
    </article>
  )
}