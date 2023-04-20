import Button from "../ui/Button";
import { Heading3 } from "../ui/Typography";
const VanCard = ({ name, price, type,
    imageUrl
}) => {
    return <div className="flex flex-col m-10 gap-3">
        <div className="w- h-auto md:h-96 rounded-md overflow-hidden">  <img src={imageUrl} alt={name} className="object-cover w-full h-full " /></div>
        <div>
            <div className="flex justify-between items-start">
                <Heading3>{name}</Heading3>
                <div className="flex flex-col gap-1 items-end">
                    <Heading3>${price}</Heading3>
                    <span>/day</span>
                </div>
            </div>
            <Button className="bg-[#161616] text-white  inline-block">{type}</Button>
        </div>

    </div>;
};

export default VanCard;
