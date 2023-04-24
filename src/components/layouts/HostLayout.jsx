import { NavLink, Outlet } from "react-router-dom";
import { Heading4 } from "../ui/Typography";
const HostLayout = () => {
    return <div>
        <div className="flex gap-5 items-center justify-between text-[#4D4D4D] px-7 py-9 bg-[#FFF7ED]">
            <NavLink to="/host" className={({ isActive }) => `hover:underline ${isActive && 'text-red-600'}`}>
                <Heading4>Dashboard</Heading4>
            </NavLink>
            <NavLink to="/host/income" className={({ isActive }) => isActive && 'text-red-600'}>
                <Heading4>Income</Heading4>
            </NavLink>
            <NavLink to="/host/reviews" className="hover:underline">
                <Heading4>Reviews</Heading4>
            </NavLink>
        </div>
        <Outlet />
    </div>;

};

export default HostLayout;
