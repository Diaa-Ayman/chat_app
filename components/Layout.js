import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Layout(props) {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">{props.children}</div>
      </div>
    </main>
  );
}
