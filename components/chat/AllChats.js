import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Chat from "./Chat";
function AllChats() {
  return (
      <div className="space-y-4 hidden md:block md:w-40 lg:w-auto">
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
  );
}

export default AllChats;
