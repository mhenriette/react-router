import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heading1, Heading2, Heading4 } from "../../components/ui/Typography";
import Button from "../../components/ui/Button";
import { BsArrowLeft } from "react-icons/bs";

const VansDetails = () => {
    const [details, setDetails] = useState("");
    const param = useParams();
    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
            .then((resp) => resp.json())
            .then((data) => setDetails(data.vans));
    }, [param.id]);
    return (
        <div className="w-full flex justify-center mb-20 lg:mb-0">
            {details ? (
                <div className="md:w-1/2 px-10 md:px-0">
                    <Link
                        to="/vans"
                        className="text-lg text-[#201F1D] underline flex items-center my-5 gap-x-2 font-bold "
                    >
                        <BsArrowLeft className="w-8 h-12" /> back to all vans
                    </Link>
                    <div className="w-full h-1/2 rounded-md overflow-hidden my-5">
                        <img src={details.imageUrl} className="w-full h-full" />
                    </div>
                    <div className="flex flex-col items-start gap-y-5">
                        <Button className="bg-orange-600 inline-block text-white">
                            {details.type}
                        </Button>
                        <Heading1>{details.name}</Heading1>
                        <div className="flex items-center text-[30px]">
                            <Heading2>${details.price}</Heading2>/day
                        </div>
                        <Heading4>{details.description}</Heading4>
                    </div>
                    <Button className="bg-orange-600 text-white my-3">
                        Book this van
                    </Button>
                </div>
            ) : (
                <div className="w-full flex justify-center items-center min-h-screen">
                    <Heading2>Loading...</Heading2>
                </div>
            )}
        </div>
    );
};

export default VansDetails;
