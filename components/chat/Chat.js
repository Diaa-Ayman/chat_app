import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import getRecipientEmail from "../../utils/RecipientEmail";

export default function Chat(props) {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(props?.group, user);
  const [users] = useCollectionDataOnce(db.collection("users"));

  const chatData = users?.find(
    (user) => recipientEmail && user.email === recipientEmail[0]
  );

  const { email, lastSeen, name, photoURL } = chatData
    ? chatData
    : {
        email: recipientEmail,
        name: "Not a User",
        photoURL:
          "https://img.freepik.com/premium-vector/banned-icon-template-e_79145-490.jpg",
      };
  return (
    <Link href={`/chats/${props.id}`} className="space-y-2">
      <div
        className={`text-gray-200 current-chat flex items-center hover:bg-gray-700 p-2 cursor-pointer space-x-2 ${props.className}`}
      >
        <img
          className="w-8 h-8 rounded-full object-cover hover:opacity-90 cursor-pointer"
          src={photoURL}
        />
        <div className="info flex flex-col text-gray-200 text-xs md:text-sm">
          <div className="flex items-center">
            <span className="lg:font-semibold mr-6">{name}</span>
            <div className="  h-2 w-2 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-gray-400">{email}</span>
        </div>
      </div>
    </Link>
  );
}
