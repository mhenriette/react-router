import { Heading4 } from "../ui/Typography";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg"
import { MdCancel } from "react-icons/md"

const NavBar = () => {
  const logout = () => localStorage.removeItem("logged")
  return (
    <div className="flex justify-between flex-col md:flex-row gap-y-3 md:gap-y-0 items-center px-7 py-3 md:py-9 bg-[#FFF7ED]">
      <NavLink to="/">
        <span className="font-black text-[26px] text-black leading-[43px]">
          #VANLIFE
        </span>
      </NavLink>
      <div className="flex gap-5 items-start text-[#4D4D4D]">
        <NavLink
          to="host"
          className={({ isActive }) =>
            `hover:text-black  after:h-[3px] after:inline-block after:w-full ${
              isActive &&
            "text-[#000000] after:bg-[#000000] "
            }`
          }
        >
          <Heading4>Host</Heading4>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `hover:text-black after:h-[3px] after:inline-block after:w-full ${
              isActive &&
            "text-[#000000]  after:bg-[#000000] "
            }`
          }
        >
          <Heading4>About</Heading4>
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            `hover:text-black after:h-[3px] after:inline-block after:w-full ${
              isActive &&
            "text-[#000000]  after:bg-[#000000] "
            }`
          }
        >
          <Heading4>Vans</Heading4>
        </NavLink>
        <NavLink to='login' >
          <CgProfile className="w-8 h-8 " />
        </NavLink>
        <button onClick={logout} >
          <MdCancel className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
