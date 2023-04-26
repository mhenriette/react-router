import { NavLink, Outlet } from "react-router-dom";
import { Heading4 } from "../ui/Typography";
const HostLayout = () => {
  return (
    <div>
      <div className="flex gap-5 items-center justify-between text-[#4D4D4D] px-7 py-9 bg-[#FFF7ED]">
        <NavLink
          to="/host"
          end
          className={({ isActive }) =>
            ` hover:text-gray-400 ${isActive && "text-black"}`
          }
        >
          <Heading4>Dashboard</Heading4>
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            ` hover:text-gray-400 ${isActive && "text-black"}`
          }
        >
          <Heading4>Income</Heading4>
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            ` hover:text-gray-400 ${isActive && "text-black"}`
          }
        >
          <Heading4>Vans</Heading4>
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            ` hover:text-gray-400 ${isActive && "text-black"}`
          }
        >
          <Heading4>Reviews</Heading4>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default HostLayout;
