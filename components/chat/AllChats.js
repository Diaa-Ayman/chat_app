import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Chat from "./Chat";
import LiveChat from "./LiveChat";
function AllChats() {
  return (
    <div className=" flex m-1 h- rounded-xl bg-gray-800 flex-1 p-4 md:p-8  space-x-2">
      <div className="space-y-4">
        <div className="search-bar flex p-2 items-center space-x-1 bg-gray-900 rounded-xl">
          <MagnifyingGlassIcon className="text-gray-400 w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-gray-100" />
          <input
            placeholder="Search"
            className="outline-none bg-gray-900 text-gray-200 text-base placeholder:text-gray-400"
          />
        </div>
        <hr />
        <div className="chats space-y-4">
          <Chat />
          <Chat />
          <Chat />
        </div>
      </div>
      <LiveChat />
    </div>
  );
}

export default AllChats;
