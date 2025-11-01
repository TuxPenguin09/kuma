export default function Sidebar() {
    return (
        <div className="w-[300px] h-[100dvh] p-4 dark:bg-[#3c3c3c] rounded-br-[10px] rounded-tr-[10px] block">
            <div className="p-[5px] bg-[#222222] rounded-[20px] text-center select-none cursor-pointer text-[10px]">Username</div>
            <div className="mt-4 select-none text-[20px] flex items-center justify-between">
                <span>Chats:</span>
                <span className="cursor-pointer hover:dark:bg-[#565656] w-[30px] text-center rounded-full">+</span>
            </div>
            <ul className="mt-1 flex flex-col gap-[1px]">
                <li className="pl-[5px] p-[4px] h-[30px] select-none cursor-pointer hover:dark:bg-[#565656] rounded-[10px] overflow-hidden"><a href="#" className="">Chat Thread</a></li>
            </ul>
        </div>
    )
}