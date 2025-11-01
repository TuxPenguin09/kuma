"use client"

export default function Chatbox({ sideBarCollapsed }: { sideBarCollapsed: boolean }) {
    return (
        <div className="flex-1 flex flex-col h-full">
            <div className={`flex-1 overflow-y-auto ${sideBarCollapsed ? "w-full" : "w-[calc(100%-50px)] ml-[50px]"} h-full`}>
                {/* Chat messages will go here */}
            </div>
            <div className={`${sideBarCollapsed ? "w-[calc(100%-10px)]" : "w-[calc(100%-50px)]"} dark:bg-[#3e3e3e] p-[5px] rounded-tl-[10px] rounded-tr-[10px] ${sideBarCollapsed ? "ml-[10px]" : "ml-[50px]"}`}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
        </div>
    );
}