import Van from "../../components/cards/Van";
import { Heading2 } from "../../components/ui/Typography";
import { defer, useLoaderData, Await } from "react-router-dom";
import { getHost } from "../../api";
import requireAuth from "../../../utils";
import { Suspense } from "react"
export const loader = async ({ request }) => {
  await requireAuth(request);
  return defer({ vans: getHost() })
};

const VansList = () => {
  const vansList = useLoaderData();
  return (
    <div className="bg-[#fff7ed] w-full text-center">
      <Heading2>Your listed Vans</Heading2>
      <div className="w-full justify-center flex-col items-center flex gap-y-5 py-5">
        <Suspense fallback={<div className="my-10">
          <Heading2>Loading vans...</Heading2>
        </div>}>
          <Await resolve={vansList.vans}>
            {
              (vans) => {
                return (
                  vans.map((van) => (
                    <Van {...van} key={van.id} />
                  ))
                )
              }
            }

          </Await>
        </Suspense>

      </div>
    </div>
  );
};

export default VansList;
