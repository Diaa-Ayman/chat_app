import Link from "next/link";
import { Fragment } from "react";
import AllChats from "../components/chat/AllChats";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Layout className="">
      <div className="text-4xl grid place-items-center h-screen flex-1 space-y-0">
        <div className="block mt-0 md:mt-4">
          <Link href="/chats">
            <button className="text-md text-white bg-green-500 rounded-3xl hover:bg-black border hover:text-red-500 hover:border-gray-100 cursor-pointer py-2 px-4 transition-all duration-500 animate-bounce">
              Go Chat!
            </button>
          </Link>
        </div>
        <img
          className="w-[99%] md:w-[75%]"
          src="https://wallpaperaccess.com/full/1647141.jpg"
          alt="welcom"
        />
      </div>
    </Layout>
  );
}

// Main color   #20232B
