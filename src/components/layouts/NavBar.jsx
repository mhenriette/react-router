import { Heading4 } from "../ui/Typography"
import { Link } from "react-router-dom";

const NavBar = () => {
    return <div className="flex justify-between px-7 py-9 bg-[#FFF7ED]">
        <Link to="/">
            <span className="font-black text-[26px] text-black leading-[43px]">#VANLIFE</span>
        </Link>
        <div className="flex gap-3 items-center text-[#4D4D4D]">

            <Link to="about" className="hover:underline"> <Heading4 >About</Heading4></Link>
            <Heading4 >Vans</Heading4>
        </div>
    </div>;
};

export default NavBar;
