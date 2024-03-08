export default function ProgressBar({width, ability}) {
  return (
    <>
      <p className="text-sm">{ability}</p>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-blue-600 h-2.5 rounded-full" style={{width: `${width}%`}}></div>
      </div>
    </>
  )
}