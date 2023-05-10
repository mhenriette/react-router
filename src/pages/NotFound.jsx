import { Link } from "react-router-dom";
import { Heading1 } from "../components/ui/Typography";

const NotFound = () => {
    return <div className="flex justify-center h-96 flex-col  items-center">
        <Heading1>Page Not Found !!!</Heading1>
        <Link to="/" className="my-10 px-10 block w-96 text-center py-2 bg-black rounded-md text-white text-xl font-semibold">Return Home</Link >

    </div>;
};

export default NotFound;
