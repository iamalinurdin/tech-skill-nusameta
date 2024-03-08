export default function Card({ children }) {
  return (
    <div className="p-10 border-2 rounded-lg border-cyan-400 bg-cyan-900 h-[400px] overflow-auto">
      {children}
    </div>
  )
}