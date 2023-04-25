import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DescriptionCard from "../../components/cards/DescriptionCard";
import { BsArrowLeft } from "react-icons/bs"
const VansDescription = () => {
    const param = useParams()
    const [description, setDescription] = useState([])
    useEffect(() => {
        fetch(`/api/host/vans/${param.id}`)
            .then(resp => resp.json())
            .then(data => setDescription(data.vans))
    }, [])
    return <div className="p-10">
        <Link
            to="/host/vans"
            className="text-lg text-[#201F1D] underline flex items-center my-5 gap-x-2 font-bold "
        >
            <BsArrowLeft className="w-8 h-12" /> back to all vans
        </Link>
        {
            description.map(el => <DescriptionCard key={el.id} {...el} />)
        }</div>;
};

export default VansDescription;
