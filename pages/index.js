import { Fragment } from "react";
import AllChats from "../components/chat/AllChats";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <Sidebar />
        <AllChats />
      </div>
    </div>
  );
}

// Main color   #20232B
