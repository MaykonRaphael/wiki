/* eslint-disable camelcase */
export function ReposItens({ name, full_name, html_url, handleRemoveRepo }) {
  return (
    <div className="flex w-2/5 text-white">
      <div className="flex-1">
        <span className="text-xl font-bold">{name}</span>
        <p className="text-base text-gray-500">{full_name}</p>
        <a href={html_url} target="_blank" rel="noreferrer">
          Ver Repositório
        </a>
      </div>
      <div className="flex flex-1 flex-col items-end justify-center">
        <a href="#" className="text-red-500" onClick={handleRemoveRepo}>
          Remover
        </a>
      </div>
      <hr />
    </div>
  )
}
