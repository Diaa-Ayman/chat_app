import {
  ClockIcon,
  PhotoIcon,
  BookmarkSquareIcon,
  NoSymbolIcon,
  ChatBubbleLeftRightIcon,
  TrashIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className="text-white w-0 md:w-40  m-2 md:m-4 mt-6">
      <ul>
        <li className="sidebar-item md:hidden">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            <Bars3Icon className="header-icon" />
          </button>
        </li>
        <li className="sidebar-item">
          <span>
            <ClockIcon className="header-icon" />
          </span>
          <span className="hidden-up">Pinned</span>
        </li>
        <li className="sidebar-item">
          <span>
            <ChatBubbleLeftRightIcon className="header-icon" />
          </span>
          <span className="hidden-up">All</span>
        </li>
        <li className="sidebar-item">
          <span>
            <PhotoIcon className="header-icon" />
          </span>
          <span className="hidden-up">Live Chat</span>
        </li>
        <li className="sidebar-item">
          <span>
            <BookmarkSquareIcon className="header-icon" />
          </span>
          <span className="hidden-up">Archived</span>
        </li>
        <li className="sidebar-item">
          <span>
            <NoSymbolIcon className="header-icon" />
          </span>
          <span className="hidden-up">Blocked</span>
        </li>
        <li className="sidebar-item">
          <span>
            <TrashIcon className="header-icon rounded-none" />
          </span>
          <span className="hidden-up">Trash</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
