import { Heading4 } from "../ui/Typography";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-start px-7 py-9 bg-[#FFF7ED]">
      <NavLink to="/">
        <span className="font-black text-[26px] text-black leading-[43px]">
          #VANLIFE
        </span>
      </NavLink>
      <div className="flex gap-5 items-start text-[#4D4D4D]">
        <NavLink to="host" className={({ isActive }) => isActive && "text-red-600 after:h-[3px] after:inline-block after:bg-red-600 after:w-full"}>
          <Heading4>Host</Heading4>
        </NavLink>
        <NavLink to="about" className={({ isActive }) => isActive && "text-red-600 after:h-[3px] after:inline-block after:bg-red-600 after:w-full"}>
          <Heading4>About</Heading4>
        </NavLink>
        <NavLink to="vans" className={({ isActive }) => isActive && "text-red-600 after:h-[3px] after:inline-block after:bg-red-600 after:w-full"}>
          <Heading4>Vans</Heading4>
        </NavLink>

      </div>
    </div>
  );
};

export default NavBar;
