import VanCard from "../../components/cards/VanCard";
import { Heading1, Heading3 } from "../../components/ui/Typography";
import { Link, useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import { getVans } from "../../api";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../../components/ui/Button";
import { Suspense } from "react";
export const loader = () => defer({ apiData: getVans() });
const Vans = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const vans = useLoaderData();

  const typeFilter = searchParam.get("type");

  const getypeFilter = (type, value) =>
    setSearchParam((prevParams) => {
      if (value === null) {
        prevParams.delete(type);
      } else {
        prevParams.set(type, value);
      }
      return prevParams;
    });
  return (
    <div className="w-full text-center">
      <Heading1>Explore our Vans options</Heading1>
      <Suspense fallback={<div className="my-10"><Heading3>Loading vans...</Heading3></div>}>
        <Await resolve={vans.apiData}>
          {
            vans => {
              return (<>
                <div className="flex gap-5 items-center flex-wrap justify-center py-5">
        <Button
          className={`${
            typeFilter === "simple" ? "bg-orange-500" : "bg-[#FFEAD0]"
          }`}
          onClick={() => getypeFilter("type", "simple")}
        >
          Simple
        </Button>
        <Button
          className={`${
            typeFilter === "luxury" ? "bg-orange-500" : "bg-[#FFEAD0]"
          }`}
          onClick={() => getypeFilter("type", "luxury")}
        >
          Luxury
        </Button>
        <Button
          className={`${
            typeFilter === "rugged" ? "bg-orange-500" : "bg-[#FFEAD0]"
          }`}
          onClick={() => getypeFilter("type", "rugged")}
        >
          Rugged
        </Button>
        {typeFilter && (
          <Link
            to="."
            className="text-lg text-[#201F1D] underline flex items-center gap-x-2 font-bold "
          >
            <BsArrowLeft className="w-8 h-12" /> back to all vans
          </Link>
        )}
      </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {typeFilter
                    ? vans
              .filter((van) => van.type === typeFilter)
                .map((van) => (
                  <VanCard
                    key={van.id}
                    {...van}
                    searchParam={searchParam}
                    typeFilter={typeFilter}
                  />
                ))
                    : vans.map((van) => (
                <VanCard
                  key={van.id}
                  {...van}
                  searchParam={searchParam}
                  typeFilter={typeFilter}
                />
              ))}
        </div>
              </>
              )
            }
          }

        </Await>
      </Suspense>



    </div>
  );
};

export default Vans;
