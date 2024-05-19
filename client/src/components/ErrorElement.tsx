import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <h4 className="grid h-screen text-red-600 place-content-center">
      There was an error...
    </h4>
  );
};
export default ErrorElement;
