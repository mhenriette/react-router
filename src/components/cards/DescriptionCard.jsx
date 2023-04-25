import Button from "../ui/Button";
import { Heading3, Heading4 } from "../ui/Typography";

const DescriptionCard = ({ name, imageUrl, price, type, id, description }) => {
    return (
        <div className=" bg-white p-5 rounded-md ">
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
                <p>details</p>
                <p>details</p>
                <p>details</p>
            </div>
            <div className="flex gap-y-2 py-2 flex-col">
                <p>
                    <span className="font-bold">Name:</span> {name}
                </p>
                <p>
                    <span className="font-bold">Category:</span> {type}
                </p>
                <p>
                    <span className="font-bold">Description:</span> {description}
                </p>
                <p>
                    <span className="font-bold">Visibilty:{" "}</span>public
                </p>
            </div>
        </div>
    );
};

export default DescriptionCard;
