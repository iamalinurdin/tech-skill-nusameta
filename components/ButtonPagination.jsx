export default function ButtonPagination({children, onclickHandler, disabled = false}) {
  return (
    <button type="button" onClick={onclickHandler} disabled={disabled} className="disabled:bg-slate-900 px-3 py-2 bg-cyan-400 hover:bg-cyan-900 rounded-lg transition duration-500">
      {children}
    </button>
  )
}