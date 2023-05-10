import { useEffect, useState } from "react";
import VanCard from "../../components/cards/VanCard";
import { Heading2 } from "../../components/ui/Typography";
const Vans = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((resp) => resp.json())
      .then((data) => setData(data.vans));
  }, []);
  return (
    <div className="w-full">
      {data.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {data.map((van) => (
            <VanCard key={van.id} {...van} />
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center min-h-screen">
          <Heading2>Loading...</Heading2>
        </div>
      )}
    </div>
  );
};

export default Vans;
