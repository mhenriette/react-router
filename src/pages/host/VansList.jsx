import { useEffect, useState } from "react";
import Van from "../../components/cards/Van";
import { Heading2, Heading3 } from "../../components/ui/Typography";
import { useSearchParams } from "react-router-dom";

const VansList = () => {
  const [vansList, setVansList] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((resp) => resp.json())
      .then((data) => setVansList(data.vans))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[#fff7ed] w-full text-center">
      <Heading2>Your listed Vans</Heading2>
      {vansList ? (
        <div className="w-full justify-center flex-col items-center flex gap-y-5 py-5">
          {vansList.map((van) => (
            <Van {...van} key={van.id} />
          ))}
        </div>
      ) : (
        <Heading3>Loading....</Heading3>
      )}
    </div>
  );
};

export default VansList;
