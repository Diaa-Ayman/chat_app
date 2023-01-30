import "../styles/globals.css";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../components/Login";
function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
