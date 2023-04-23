import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heading2 } from "../components/ui/Typography";

const VansDetails = () => {
    const [details, setDetails] = useState("")
    const param = useParams()
    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
            .then(resp => resp.json())
            .then(data => setDetails(data.vans))

    }, [])
    console.log(details)
    return <div>
        {details ? <h1>{details.id}</h1> : <div className="w-full flex justify-center items-center min-h-screen">
            <Heading2>Loading...</Heading2>

        </div>}

    </div>;
};

export default VansDetails;
