export default function ProgressBar({width, ability}) {
  return (
    <>
      <p className="text-sm">{ability}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${width}%`}}></div>
      </div>
    </>
  )
}