import VanCard from "../../components/cards/VanCard";
import { Heading2, Heading1 } from "../../components/ui/Typography";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../../components/ui/Button";
export const loader = () => getVans();
const Vans = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const apiData = useLoaderData();

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
      {apiData.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {typeFilter
            ? apiData
                .filter((el) => el.type === typeFilter)
                .map((van) => (
                  <VanCard
                    key={van.id}
                    {...van}
                    searchParam={searchParam}
                    typeFilter={typeFilter}
                  />
                ))
            : apiData.map((van) => (
                <VanCard
                  key={van.id}
                  {...van}
                  searchParam={searchParam}
                  typeFilter={typeFilter}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default Vans;
