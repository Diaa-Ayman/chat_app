import {
  BookmarkSquareIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";
export default function LiveChat() {
  return (
    <div className="flex-1 flex flex-col rounded-xl bg-gray-900">
      <div className="livechat-header px-2 flex justify-between items-center rounded-t-xl bg-black h-12 ">
        <div className="conv flex items-center space-x-2 text-xs text-gray-300">
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
      <div className="chat-messages flex-1">chat</div>
      <footer className="livechat-footer bg-gray-700 rounded-b-xl h-10">
        Footer
      </footer>
    </div>
  );
}
