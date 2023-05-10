import { useEffect, useState } from "react";
import VanCard from "../../components/cards/VanCard";
import { Heading2, Heading1 } from "../../components/ui/Typography";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../../components/ui/Button";
const Vans = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await getVans();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
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
  if (loading)
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <Heading2> Page Loading...</Heading2>
      </div>
    );
  if (error)
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <Heading2>{error.message}</Heading2>
      </div>
    );

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
      {data.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {typeFilter
            ? data
              .filter((van) => van.type === typeFilter)
                .map((van) => (
                  <VanCard
                    key={van.id}
                    {...van}
                    searchParam={searchParam}
                    typeFilter={typeFilter}
                  />
                ))
            : data.map((van) => (
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
