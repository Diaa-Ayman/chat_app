import {
  ArrowSmallDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Chat from "./Chat";
import * as EmailValidator from "email-validator";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState } from "react";
function AllChats() {
  const [user] = useAuthState(auth);
  const [chatIsThere, setChatIsThere] = useState(false);
  const userChatRef = db
    .collection("chats")
    .where("chatGroup", "array-contains", user.email);
  const [chatSnapshot] = useCollection(userChatRef);
  const group = chatSnapshot?.docs.map((chat) => chat.data().chatGroup);
  console.log(group);

  const addNewChatHandler = () => {
    const chatEmail = prompt("Enter Chat Email!");
    setChatIsThere(chatAlreadyThere(chatEmail));
    if (!chatEmail) return null;
    if (
      EmailValidator.validate(chatEmail) &&
      chatEmail !== user.email &&
      !chatAlreadyThere(chatEmail)
    ) {
      // add the chat to db...
      db.collection("chats").add({
        chatGroup: [user.email, chatEmail],
      });
    }
    setTimeout(() => {
      setChatIsThere(false);
    }, 3000);
  };

  const chatAlreadyThere = (recipientEmail) => {
    if (recipientEmail !== user.email)
      return !!chatSnapshot?.docs.find(
        (chat) =>
          chat.data().chatGroup.find((chatItem) => chatItem === recipientEmail)
            ?.length > 0
      );
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
      <div className="mt-4 ml-2 space-y-2">
        <button
          className="text-gray-200 text-sm cursor-pointer hover:text-gray-400"
          onClick={addNewChatHandler}
        >
          Add New Chat
        </button>
        {chatIsThere ? (
          <div className="animate-bounce h-7 bg-red-500 text-white text-sm font-semibold rounded-md flex justify-center items-center">
            This Chat is Already There{" "}
            <ArrowSmallDownIcon className="header-icon text-white font-bold" />
          </div>
        ) : null}
      </div>
      <hr />
      <div className="chats space-y-4 scrollbar-hide overflow-y-scroll flex-1 border-gray-700 rounded-md shadow-inner shadow-gray-900">
        {chatSnapshot?.docs.map((chat) =>
          chat.data().chatGroup.length > 0 ? (
            <Chat group={chat.data().chatGroup} key={chat.id} id={chat.id} />
          ) : (
            <div className="text-xl text-red-600">NO CHATS</div>
          )
        )}
      </div>
    </div>
  );
}

export default AllChats;
