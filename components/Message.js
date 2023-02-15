import moment from "moment/moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Message({ message, user }) {
  const [userLoggedIn] = useAuthState(auth);

  const sender = user === userLoggedIn.email;

  return (
    <div
      className={`text-white  text-md ${
        sender ? "bg-indigo-600 ml-auto" : "bg-gray-800"
      } m-2 pt-1 px-3 rounded-lg w-fit min-w-[70px] pb-4 max-w-[300px] md:max-w-[400px] break-all overflow-hidden relative`}
    >
      <p className=""> {message.message}</p>
      <p className="text-[8px] text-gray-300 absolute right-1 bottom-1 align-right">
        {message.timeStamp ? moment(message.timeStamp).format("LT") : "..."}
      </p>
    </div>
  );
}

export default Message;
