import AllChats from "../../components/chat/AllChats";
import ChatInfo from "../../components/chat/ChatInfo";
import LiveChat from "../../components/chat/LiveChat";
import Layout from "../../components/Layout";

function ChatPage() {
  return (
    <Layout>
      <div className="m-1 ml-0 border-2 border-gray-800 md:border-0 flex rounded-xl bg-gray-800  md:p-4  md:space-x-2 h-[556px]">
        <AllChats className="flex-1" />
      </div>
    </Layout>
  );
}
export default ChatPage;
