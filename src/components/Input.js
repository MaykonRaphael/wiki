export function Input({ onClick, value, onChange }) {
  return (
    <div className="m-auto flex h-10 w-2/5 gap-2 rounded-md border border-gray-200 bg-transparent text-white">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="flex-1 rounded-md bg-transparent px-3 text-white outline-none"
      />
      <button onClick={onClick} className="pe-2">
        Buscar
      </button>
    </div>
  )
}
