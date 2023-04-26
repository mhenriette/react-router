import { useOutletContext } from "react-router-dom";

const Photos = () => {
  const { data } = useOutletContext();
  const { imageUrl } = data;
  return (
    <div className="rounded-md w-40 h-40 overflow-hidden my-2">
      <img src={imageUrl} className="w-full h-full" />
    </div>
  );
};

export default Photos;
