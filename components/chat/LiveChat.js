import {
  BookmarkSquareIcon,
  CalculatorIcon,
  PaperClipIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  FaceSmileIcon
} from "@heroicons/react/24/outline";
export default function LiveChat() {

  const arr = [1, 2, 3, 4, 5, 6,3,3,3,3, 7, 8, 5, 4,3,4, 3,3,3]
  return (
    <div className="flex-1 flex flex-col rounded-xl bg-gray-900">
      <div className="livechat-header px-2 flex justify-between items-center rounded-t-xl bg-black h-12 ">
        <div className="conv h-12 flex items-center space-x-2 text-xs text-gray-300">
          <img
            src="https://www.shutterstock.com/image-photo/young-handsome-man-possing-modeling-260nw-1306661410.jpg"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span>
            Conversation with{" "}
            <span className="text-sm text-gray-200 text-bold">Badr Ali</span>
          </span>
        </div>
        <div className="hidden-up md:flex space-x-2">
          <BookmarkSquareIcon className="header-icon" />
          <CalculatorIcon className="header-icon" />
        </div>
      </div>
      <div className="chat-messages flex-1 overflow-scroll scrollbar-hide">
        {arr.map(ele => {
          return <div className="text-lg text-white m-3 bg-blue-500 rounded-xl p-1 w-56">chat </div>
        })}
      </div>
      <footer className="livechat-footer flex  space-x-2 items-center bg-gray-700  p-2 m-2 rounded-xl h-12">
      <input placeholder="Write a message!" className="flex-1 p-1 placeholder:text-sm rounded-xl bg-gray-700 outline-none border-none text-white" />
        <div className = 'icons flex items-center space-x-1'>
          <FaceSmileIcon className="header-icon"/>
          <PaperClipIcon className="header-icon" />
          <PhotoIcon className="header-icon" />
        </div>
        <button className="bg-yellow-200 p-2 cursor-pointer hover:bg-yellow-300 rounded-xl">
          <PaperAirplaneIcon className="header-icon text-black"/>
        </button>
      </footer>
    </div>
  );
}
