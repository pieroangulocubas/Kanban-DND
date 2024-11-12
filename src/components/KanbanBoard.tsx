import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column } from "../types";
import { generateId } from "../utils";
import { ColumnContainer } from "./ColumnContainer";

export default function KanbanBoard() {
  const [columns,setColumns] = useState<Column[]>([])

  const createNewColumn=()=>{
    const columnToAdd:Column={
      id:generateId(),
      title:`Column ${columns.length + 1}`
    }

    setColumns([...columns,columnToAdd])
  }

  const deleteColumn=(id:string)=>{
    const columnsFiltered=columns.filter(col=>col.id !== id)
    setColumns(columnsFiltered)
  }

  return (
    <div className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflows-x-auto
        overflow-y-hidden
        px-[40px]
    ">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map(col=>(
            <ColumnContainer key={col.id} column={col} deleteColumn={deleteColumn} />
          ))}
        </div>
        <button 
        onClick={createNewColumn}
        className="
            h-[60px]
            w-[350px]
            min-w-[350px]
            cursor-pointer
            rounded-lg
            border-2
            bg-slate-900
            ring-rose-500
            hover:ring-2
            p-4
            text-white
            flex
            gap-2
        ">
            <PlusIcon />
            Add Column
        </button>
      </div>
    </div>
  )
}
