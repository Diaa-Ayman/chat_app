import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Chat from "./Chat";
function AllChats() {
  return (
    <div className="mt-1 rounded-xl bg-gray-800 flex-1 p-8 space-y-4">
      <div className="search-bar flex p-2 items-center space-x-1 bg-gray-800 rounded-xl">
        <MagnifyingGlassIcon className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-100" />
        <input
          placeholder="Search"
          className="outline-none bg-gray-800 text-gray-200 text-base placeholder:text-gray-400"
        />
      </div>
      <hr />
      <div className="chats space-y-6">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
}

export default AllChats;
