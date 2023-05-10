import { Link, Outlet, useLoaderData } from "react-router-dom";
import DescriptionCard from "../../components/cards/DescriptionCard";
import { BsArrowLeft } from "react-icons/bs";
import { getHost } from "../../api";
import requireAuth from "../../../utils";
export const loader = async ({ params, request }) => {
  await requireAuth(request);
  return getHost(params.id);
};

const VansDescription = () => {
  const description = useLoaderData();
  return (
    <div className="p-10">
      <Link
        relative="path"
        to="/host/vans"
        className="text-lg text-[#201F1D] underline flex items-center my-5 gap-x-2 font-bold "
      >
        <BsArrowLeft className="w-8 h-12" /> back to all vans
      </Link>
      <div className="bg-white p-5 rounded-md ">
        <DescriptionCard {...description} />
        <div>
          <Outlet context={{ data: description }} />
        </div>
      </div>
    </div>
  );
};

export default VansDescription;
