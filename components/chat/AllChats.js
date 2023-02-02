import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Chat from "./Chat";
import * as EmailValidator from "email-validator";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
function AllChats() {
  const [user] = useAuthState(auth);
  const addNewChatHandler = () => {
    const chatEmail = prompt("Enter Chat Email!");
    if (!chatEmail) return null;
    if (EmailValidator.validate(chatEmail)) {
      // add the chat to db...
      db.collection("chats").add({
        chatTeam: [user.email, chatEmail],
      });
    }
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
