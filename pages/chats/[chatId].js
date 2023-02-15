import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import AllChats from "../../components/chat/AllChats";
import ChatInfo from "../../components/chat/ChatInfo";
import LiveChat from "../../components/chat/LiveChat";
import Layout from "../../components/Layout";
import { auth, db } from "../../firebase";
import getRecipientEmail from "../../utils/RecipientEmail";

function Chat({ messages, chat }) {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(chat.chatGroup, user);
  const [users] = useCollectionDataOnce(db.collection("users"));
  const chatData = users?.find(
    (user) => recipientEmail && user.email === recipientEmail[0]
  );
  return (
    <Layout>
      <Head>
        <title>Chat with {chatData ? chatData.name : "a friend"}</title>
      </Head>
      <div className="m-1 border-2 border-gray-800 md:border-0 flex rounded-xl bg-gray-800  md:p-4  md:space-x-2 h-[450px] md:h-[520px] lg:h-[590px]">
        <AllChats className="hidden md:flex" />
        <LiveChat chatData={chatData} messages={messages} />
        <ChatInfo chatData={chatData} />
      </div>
    </Layout>
  );
}
export default Chat;

export async function getServerSideProps(ctx) {
  const ref = db.collection("chats").doc(ctx.query.chatId);

  // PREP THE MESSAGES ON THE SERVER..
  const messagesRes = await ref
    .collection("messages")
    .orderBy("timeStamp", "asc")
    .get();

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timeStamp: messages.timeStamp.toDate().getTime(),
    }));

  // PREP THE CHAT ON THE SERVER...

  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages), // as it's more complex so stringify it send it on the server then
      // return it as prop then convert it again.
      chat: chat,
    },
  };
}
