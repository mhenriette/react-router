import { Link } from "react-router-dom";
import { Heading1 } from "../components/ui/Typography";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center h-96 flex-col  items-center">
      <Heading1>{error.message}</Heading1>
      <pre className="mt-5">
        {error.status} - {error.statusText}
      </pre>
      <Link
        to="/"
        className="my-10 px-10 block w-96 text-center py-2 bg-black rounded-md text-white text-xl font-semibold"
      >
        Return Home
      </Link>
    </div>
  );
};

export default ErrorPage;
