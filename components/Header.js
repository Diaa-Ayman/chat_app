import React from "react";
import {
  DocumentIcon,
  Squares2X2Icon,
  UserCircleIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  BellIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
export default function Header() {
  return (
    <div className="px-8 flex justify-between py-1 items-center bg-gray-800 text-gray-300">
      <div className="flex items-center">
        <span className="m-2 text-md cursor-pointer">
          Ne
          <span className="font-semibold text-gray-100">Workers</span>
        </span>
        <ul className="flex items-center text-sm ml-10">
          <li className="header-item">
            <span>
              <DocumentIcon className="header-icon" />
            </span>
            <span className="">Resume</span>
          </li>
          <li className="header-item">
            <span>
              <UserCircleIcon className="header-icon" />
            </span>
            <span>Contacts</span>
          </li>
          <li className="header-item">
            <span>
              <ChartBarIcon className="header-icon" />
            </span>
            <span>Statistic</span>
          </li>
          <li className="header-item">
            <span>
              <ChatBubbleBottomCenterTextIcon className="header-icon" />
            </span>
            <span>Chats</span>
          </li>
          <li className="header-item">
            <span>
              <Squares2X2Icon className="header-icon" />
            </span>
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2">
          <span className="p-2 hover:bg-gray-500 hover:cursor-pointer rounded-full">
            <PhoneIcon className="w-6 h-6" />
          </span>
          <span className="p-2 hover:bg-gray-500 hover:cursor-pointer rounded-full">
            <BellIcon className="w-6 h-6" />
          </span>
        </div>
        <div className="current-chat flex items-center space-x-1">
          <div className="info flex flex-col text-sm text-right text-gray-200 text-sm">
            <span className="">
              Welcome, <span className="font-semibold">Diaa Ayman</span>
            </span>
            <span className="text-xs text-gray-400">abugam21@gmail.com</span>
          </div>
          <img
            className="w-10 h-10 rounded-full object-cover hover:opacity-90 cursor-pointer"
            src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
          />
        </div>
      </div>
    </div>
  );
}
