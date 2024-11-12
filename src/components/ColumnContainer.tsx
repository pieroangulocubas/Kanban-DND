import { TrashIcon } from "../icons"
import { Column } from "../types"

interface Props{
  column:Column,
  deleteColumn:(id:string)=>void
}
export const ColumnContainer = ({column,deleteColumn}:Props) => {
  return (
    <div className="w-[350px] h-[500px] max-h-[500px] rounded-md flex bg-slate-950 flex-col">
      <div className="text-md text-white bg-slate-900 h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-4 flex justify-between items-center border-slate-950">
        <div className="flex gap-2">
          <div
            className="flex justify-center items-center bg-slate-950 px-2 py-1 text-sm rounded-full"
          >
            0
          </div>
          {column.title}
        </div>
        <button onClick={()=>deleteColumn(column.id)} className="
        stroke-gray-600
        hover:stroke-white
        hover:bg-slate-950
        rounded px-1 py-2">
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
