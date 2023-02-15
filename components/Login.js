import Head from "next/head";
import { auth, provider } from "../firebase";

export default function Login() {
  const signInHandler = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div>
      <Head>
        <title>login</title>
      </Head>
      <div className=" border-4 border-gray-600  shadow-white space-y-16 text-gray-400 bg-gray-900 w-fit px-8 pt-32 pb-24  flex items-center flex-col justify-center m-auto mt-16 md:mt-28 lg:mt-36">
        <span className="text-sm">
          Welcome to{" "}
          <span className="text-4xl text-white font-semibold">NeWorkers</span>
        </span>
        <button
          onClick={signInHandler}
          className="bg-red-600 py-2 px-4 hover:bg-white hover:text-gray-800 transition-all duration-500 rounded-3xl text-gray-200 text-md font-semibold"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
