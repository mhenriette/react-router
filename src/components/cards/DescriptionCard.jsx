import { NavLink, Outlet } from "react-router-dom";
import Button from "../ui/Button";
import { Heading3, Heading4 } from "../ui/Typography";

const DescriptionCard = ({ name, imageUrl, price, type }) => {
    return (
        <div>
            <div className="flex gap-x-5 items-start">
                <div className=" w-40 h-40 overflow-hidden rounded-md">
                    <img src={imageUrl} className="w-full h-full object-cover" />
                </div>
                <div className="py-4">
                    <Button className="bg-orange-500">{type}</Button>
                    <div>
                        <Heading3>{name}</Heading3>
                        <div className="text-lg flex items-end">
                            <Heading4>{price}</Heading4>/day
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between items-center py-2 font-bold ">
                <NavLink
                    to="."
                    end
                    className={({ isActive }) => (isActive ? "text-red-600" : null)}
                >
                    <Heading4>Details</Heading4>
                </NavLink>
                <NavLink
                    to="pricing"
                    className={({ isActive }) => (isActive ? "text-red-600" : null)}
                >

                    <Heading4>Pricing</Heading4>
                </NavLink>
                <NavLink
                    to="photos"
                    className={({ isActive }) => (isActive ? "text-red-600" : null)}
                >
                    <Heading4>Photos</Heading4>
                </NavLink>
            </div>
        </div>
    );
};

export default DescriptionCard;
