import Van from "../../components/cards/Van";
import { Heading2 } from "../../components/ui/Typography";
import { useLoaderData } from "react-router-dom";
import { getHost } from "../../api";
import requireAuth from "../../../utils"
export const loader = async () => {
  await requireAuth()
  return getHost()
}

const VansList = () => {
  const vansList = useLoaderData()
  return (
    <div className="bg-[#fff7ed] w-full text-center">
      <Heading2>Your listed Vans</Heading2>

        <div className="w-full justify-center flex-col items-center flex gap-y-5 py-5">
          {vansList.map((van) => (
            <Van {...van} key={van.id} />
          ))}
        </div>

    </div>
  );
};

export default VansList;
