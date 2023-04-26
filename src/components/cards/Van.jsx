import React from "react";
import { Heading3, Heading4 } from "../ui/Typography";
import { Link, useParams } from "react-router-dom";

const Van = ({ imageUrl, name, price, id }) => {
  return (
    <div className="bg-white rounded-md w-4/5 gap-x-5 ">
      <Link to={id} className="w-full">
        <div className="w-full flex items-center justify-start">
          <div className=" w-32 h-32 md:w-52 md:h-52 rounded-md overflow-hidden m-3">
            <img src={imageUrl} className="w-full h-full" />
          </div>
          <div>
            <Heading3>{name}</Heading3>
            <div className="flex items-end text-lg ">
              <Heading4>{price}</Heading4> /day
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Van;
