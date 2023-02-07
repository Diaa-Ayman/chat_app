import {
  PhoneIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Chat from "./Chat";
function ChatInfo({ chatData }) {
  const { name, photoURL, email } = chatData ? chatData : {};
  return (
    <div className="">
      <div className="flex flex-bottom flex-col bg-indigo-600 p-1 md:p-2 lg:p-4  m-2 rounded-xl">
        <div className="hover:bg-indigo-500 cursor-pointer p-1 rounded-xl">
          {/*Here is Start */}
          <div
            className={`text-gray-200 current-chat flex items-center hover:bg-gray-700 p-2 cursor-pointer space-x-2 `}
          >
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover hover:opacity-90 cursor-pointer"
              src={photoURL}
            />
            <div className="info flex flex-col text-gray-200 text-xs md:text-sm">
              <div className="flex items-center">
                <span className="font-semibold mr-6">{name}</span>
                <div className="  h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400">{email}</span>
            </div>
          </div>
          {/* here is end */}
          {/* <Chat className="bg-indigo-600 hover:bg-indigo-500 p-0 mb-3 hidden md:flex" /> */}
          <span className="job hidden md:block text-white px-2 py-1  rounded-lg text-xs  bg-indigo-500">
            UI/UX Designer
          </span>
        </div>
        <div className="flex flex-col p-2 md:flex-row justify-center md:items-center  space-y-3 md:space-x-3   md:mt-3 lg:mt-4">
          <div className="icon-container">
            <PhoneIcon className="header-icon text-white" />
          </div>
          <div className="icon-container">
            <VideoCameraIcon className="header-icon text-white" />
          </div>
          <div className="icon-container">
            <SpeakerWaveIcon className="header-icon text-white" />
          </div>
          <div className="icon-container">
            <ShoppingBagIcon className="header-icon text-white" />
          </div>
        </div>
      </div>
      <div className="data mt-6 space-y-2">
        {["Attachments", "Links", "All Vacancies", "Appointments"].map(
          (ele) => (
            <div
              key={ele}
              className="flex justify-center md:justify-between hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
            >
              <span className="text-gray-300 hidden md:flex">{ele}</span>
              <div>
                <ChevronDownIcon className="header-icon" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ChatInfo;
