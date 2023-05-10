import { useOutletContext } from "react-router-dom";

const Details = () => {
  const { data: { name, type, description } } = useOutletContext();
  return (
    <div className="flex gap-y-2 py-2 flex-col ">
      <p>
        <span className="font-bold">Name:</span> {name}
      </p>
      <p>
        <span className="font-bold">Category:</span> {type}
      </p>
      <p>
        <span className="font-bold">Description:</span> {description}
      </p>
      <p>
        <span className="font-bold">Visibilty: </span>public
      </p>
    </div>
  );
};

export default Details;
