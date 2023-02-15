import {
  BookmarkSquareIcon,
  CalculatorIcon,
  PaperClipIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  FaceSmileIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";
import { Router, useRouter } from "next/router";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useCollectionDataOnce,
} from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import Message from "../Message";
import firebase from "firebase";
import TimeAgo from "timeago-react";
export default function LiveChat({ chatData, messages }) {
  const [input, setInput] = useState("");
  const endOfMsg = useRef(null);
  const arr = [1, 2, 3, 4, 5, 6, 3, 3, 3, 3, 7, 8, 5, 4, 3, 4, 3];
  const [user] = useAuthState(auth);
  const router = useRouter();

  const [messagesSnapshot] = useCollection(
    db
      .collection("chats")
      .doc(router.query.chatId)
      .collection("messages")
      .orderBy("timeStamp", "asc")
  );

  console.log(chatData);
  // const [messagesOfComponent] = useCollectionDataOnce(
  //   db.collection("chats").doc(router.query.chatId).collection("messages")
  // );

  const showMessage = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timeStamp: message.data().timeStamp?.toDate().getTime(),
          }}
        />
      ));
    } else {
      return JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      ));
    }
  };

  const scrollToBottom = () => {
    endOfMsg.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const { name, photoURL, lastSeen } = chatData
    ? chatData
    : {
        name: "Not NeWorkers User",
        photoURL:
          "https://img.freepik.com/premium-vector/banned-icon-template-e_79145-490.jpg",
      };
  const sendMsgHandler = (e) => {
    e.preventDefault();

    // update the last seen....
    db.collection("users").doc(user.uid).set(
      {
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    db.collection("chats").doc(router.query.chatId).collection("messages").add({
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL,
    });
    setInput("");
    scrollToBottom();
  };

  return (
    <div className="flex-1 flex flex-col rounded-xl bg-gray-900">
      <div className="livechat-header px-2 flex justify-between items-center rounded-t-xl bg-black h-12 ">
        <div className="flex items-center space-x-2">
          <img src={photoURL} className="w-6 h-6 rounded-full object-cover" />
          <div className="conv h-12 flex items-center space-x-2 text-xs text-gray-300">
            <span>
              Conversation with{" "}
              <span className="text-sm text-gray-200 text-bold">{name}</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 ml-12">
            {chatData ? (
              <span>
                {chatData?.lastSeen ? (
                  <TimeAgo datetime={chatData?.lastSeen.toDate()} />
                ) : (
                  "loading..."
                )}
              </span>
            ) : (
              <span>Unavailable</span>
            )}
          </p>
        </div>
        <div className="hidden-up md:flex space-x-2">
          <BookmarkSquareIcon className="header-icon" />
          <CalculatorIcon className="header-icon" />
        </div>
      </div>
      <div className="chat-messages flex-1 overflow-scroll scrollbar-hide">
        {showMessage()}
        <div className="mb-[50px]" ref={endOfMsg}></div>
      </div>
      <footer>
        <form
          onSubmit={sendMsgHandler}
          className="livechat-footer flex  space-x-2 items-center bg-gray-700  p-2 m-2 rounded-xl h-12"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Write a message!"
            className="flex-1 p-1 placeholder:text-sm rounded-xl bg-gray-700 outline-none border-none text-white"
          />
          <div className="icons flex items-center space-x-2">
            <MicrophoneIcon className="header-icon" />
            <FaceSmileIcon className="header-icon" />
            <PaperClipIcon className="header-icon" />
            <PhotoIcon className="header-icon" />
          </div>
          <button
            type="submit"
            className="bg-yellow-200 p-2 cursor-pointer hover:bg-yellow-300 rounded-xl"
          >
            <PaperAirplaneIcon className="header-icon text-black font-bold" />
          </button>
        </form>
      </footer>
    </div>
  );
}
