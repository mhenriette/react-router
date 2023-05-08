import { Link, useLoaderData, useLocation } from "react-router-dom";
import { Heading1, Heading2, Heading4 } from "../../components/ui/Typography";
import Button from "../../components/ui/Button";
import { BsArrowLeft } from "react-icons/bs";
import { getVans } from "../../api";
export const loader = ({ params }) => {
  return getVans(params.id)
}
const VansDetails = () => {
  const location = useLocation();
  const details = useLoaderData()
  const search = location.state?.search || "";
  return (
    <div className="w-full flex justify-center mb-20 lg:mb-0">

        <div className="md:w-1/2 px-10 md:px-0">
          <Link
            to={`..?${search}`}
            relative="path"
            className="text-lg text-[#201F1D] underline flex items-center my-5 gap-x-2 font-bold "
          >
            <BsArrowLeft className="w-8 h-12" /> back to{" "}
            {search ? `${location.state?.type.typeFilter}` : "all"} vans
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
    </div>
  );
};

export default VansDetails;
