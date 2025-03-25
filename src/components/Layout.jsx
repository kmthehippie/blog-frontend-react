import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "../App.css";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Nav>This is the nav</Nav>
      </header>

      <main className="App">
        <Outlet />
      </main>

      <footer>
        <small>Project by KM</small>
      </footer>
    </div>
  );
};

export default Layout;
