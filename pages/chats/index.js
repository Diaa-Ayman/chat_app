import AllChats from "../../components/chat/AllChats";
import Layout from "../../components/Layout";

function ChatPage() {
  return (
    <Layout hide>
      <div className="m-1 ml-0 border-2 border-gray-800 md:border-0 flex rounded-xl bg-gray-800  md:p-4  md:space-x-2 h-screen mb-4 lg:h-[580px]">
        <AllChats className="flex-1" />
      </div>
    </Layout>
  );
}
export default ChatPage;
