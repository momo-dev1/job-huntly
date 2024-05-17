import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  status: number;
  // include other properties as needed
}

const Error = () => {
  const error = useRouteError() as RouteError;
  if (error.status === 404) {
    return (
      <div className="overflow-hidden ">
        <div className="flex flex-col items-center justify-center gap-16 px-6 lg:flex-row py-28 md:px-24 md:py-20 lg:py-32 lg:gap-28">
          <div className="w-full lg:w-1/2">
            <img
              className="mx-auto"
              alt="error img"
              src="https://i.ibb.co/v30JLYr/Group-192-2.png"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="py-4 text-3xl font-extrabold text-gray-800 lg:text-4xl">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="py-4 text-base text-gray-800">
              The content you’re looking for doesn’t exist. Either it was
              removed, or you mistyped the link.
            </p>
            <p className="py-2 text-base text-gray-800">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
            <Link to="/dashboard">
              <button className="w-full px-1 py-5 my-4 text-white bg-indigo-600 border rounded-md lg:w-auto sm:px-16 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Go back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center gap-16 px-6 py-28 md:px-24 md:py-20 lg:py-32 lg:gap-28">
        <h3 className="py-4 text-3xl font-extrabold text-gray-800 lg:text-4xl">
          something went wrong
        </h3>
      </div>
    </div>
  );
};

export default Error;
