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
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
export default function Header() {
  const [user] = useAuthState(auth);
  return (
    <div className="px-4 md:px-6 lg:px-8 flex justify-between py-1 items-center bg-gray-800 text-gray-300">
      <div className="flex items-center">
        <Link href="/">
          <span className="m-2 text-xs md:text-md lg:text-base cursor-pointer">
            Ne
            <span className="font-semibold text-md  text-gray-100">
              Workers
            </span>
          </span>
        </Link>
        <ul className="hidden md:flex items-center text-sm ml-3 md:ml-6 lg:ml-10">
          <li className="header-item">
            <span>
              <DocumentIcon className="header-icon" />
            </span>
            <span className="hidden-up">Resume</span>
          </li>
          <li className="header-item">
            <span>
              <UserCircleIcon className="header-icon" />
            </span>
            <span className="hidden-up">Contacts</span>
          </li>
          <li className="header-item">
            <span>
              <ChartBarIcon className="header-icon" />
            </span>
            <span className="hidden-up">Statistic</span>
          </li>
          <Link href="/chats">
            <li className="header-item">
              <span>
                <ChatBubbleBottomCenterTextIcon className="header-icon" />
              </span>
              <span className="hidden-up">Chats</span>{" "}
            </li>
          </Link>

          <li className="header-item">
            <span>
              <Squares2X2Icon className="header-icon" />
            </span>
            <span className="hidden-up">Settings</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-6 lg:space-x-12">
        <div className="flex items-center space-x-2">
          <span className="p-2 hover:bg-gray-500 hover:cursor-pointer rounded-full">
            <PhoneIcon className="w-6 h-6" />
          </span>
          <span className="p-2 hover:bg-gray-500 hover:cursor-pointer rounded-full">
            <BellIcon className="w-6 h-6" />
          </span>
        </div>
        <div className="current-chat flex items-center space-x-1">
          <div className="info hidden lg:flex flex-col text-right text-gray-200 text-xs md:text-sm">
            <span className="">
              Welcome, <span className="font-semibold">{user.displayName}</span>
            </span>
            <span className="text-xs text-gray-400">{user.email}</span>
          </div>
          <img
            className="w-8 h-8 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full object-cover hover:opacity-90 cursor-pointer"
            src={user.photoURL}
          />
        </div>
      </div>
    </div>
  );
}
