import PlusIcon from "../icons/PlusIcon";

export default function KanbanBoard() {
  return (
    <div className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflows-x-auto
        overflow-y-hidden
        px-[40px]
    ">
        <button className="
            h-[60px]
            w-[350px]
            min-w-[350px]
            cursor-pointer
            rounded-lg
            border-2
            bg-mainBgColor
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
  )
}
