import {
  ClockIcon,
  PhotoIcon,
  BookmarkSquareIcon,
  NoSymbolIcon,
  ChatBubbleLeftRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className="text-white w-48 m-4 mt-6">
      <ul>
        <li className="sidebar-item">
          <span>
            <ClockIcon className="header-icon" />
          </span>
          <span className="">Pinned</span>
        </li>
        <li className="sidebar-item">
          <span>
            <ChatBubbleLeftRightIcon className="header-icon" />
          </span>
          <span className="">All</span>
        </li>
        <li className="sidebar-item">
          <span>
            <PhotoIcon className="header-icon" />
          </span>
          <span className="">Live Chat</span>
        </li>
        <li className="sidebar-item">
          <span>
            <BookmarkSquareIcon className="header-icon" />
          </span>
          <span className="">Archived</span>
        </li>
        <li className="sidebar-item">
          <span>
            <NoSymbolIcon className="header-icon" />
          </span>
          <span className="">Blocked</span>
        </li>
        <li className="sidebar-item">
          <span>
            <TrashIcon className="header-icon rounded-none" />
          </span>
          <span className="">Trash</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;