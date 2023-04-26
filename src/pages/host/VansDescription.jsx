import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import DescriptionCard from "../../components/cards/DescriptionCard";
import { BsArrowLeft } from "react-icons/bs";
const VansDescription = () => {
  const param = useParams();
  const [description, setDescription] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${param.id}`)
      .then((resp) => resp.json())
      .then((data) => setDescription(data.vans))
      .catch((error) => console.log(error))
  }, []);
  if (!description) return <h1>Loading....</h1>;
  return (
    <div className="p-10">
      <Link
        relative="path"
        to=".."
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
