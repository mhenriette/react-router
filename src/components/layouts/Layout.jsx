import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 bg-[#fff7ed] px-80">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
