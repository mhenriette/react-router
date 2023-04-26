import { useOutletContext } from "react-router-dom";
import { Heading3 } from "../../components/ui/Typography";

const Pricing = () => {
    const { data } = useOutletContext();
    const { price } = data;
    return (
        <div className="py-2">
            <div className="flex items-end text-lg">
                <Heading3>{price}</Heading3>/day
            </div>
        </div>
    );
};

export default Pricing;
