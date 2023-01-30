import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Chat from "./Chat";
function AllChats() {
  const addNewChatHandler = () => {
    const input = prompt("Enter Chat Email!");

    if (!input) return;
  };
  return (
    <div className="flex-col space-y-4 hidden lg:flex md:w-40 lg:w-auto">
      <div className="search-bar flex p-2 items-center space-x-1 bg-gray-900 rounded-xl">
        <MagnifyingGlassIcon className="text-gray-400 w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-gray-100" />
        <input
          placeholder="Search"
          className="outline-none bg-gray-900 text-gray-200 text-base placeholder:text-gray-400"
        />
      </div>
      <div className="mt-4 ml-2">
        <button
          className="text-gray-200 text-sm cursor-pointer hover:text-gray-400"
          onClick={addNewChatHandler}
        >
          Add New Chat
        </button>
      </div>
      <hr />
      <div className="chats space-y-4 scrollbar-hide overflow-y-scroll flex-1 border-gray-700 rounded-md shadow-inner shadow-gray-900">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
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
