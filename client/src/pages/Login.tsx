import toast from "react-hot-toast";
import { LogoIcon } from "../assets";
import {
  Form,
  Link,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { FormField, SubmitButton, FormWrapper } from "../components";
import fetchJson from "../utils/fetchJson";
import { QueryClient } from "@tanstack/react-query";

export const action =
  (queryClient: QueryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await fetchJson.post("/auth/login", data);
      queryClient.invalidateQueries();
      toast.success("Login successful!");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };
const Login = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "test1234",
    };
    try {
      await fetchJson.post("/auth/login", data);
      toast.success("Take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <FormWrapper>
      <div className="mt-8 sm:mx-auto min-w-[400px] max-w-[600px] px-7">
        <div className="px-6 py-8 bg-white dark:bg-eerie-black shadow max-w-[400px] rounded-lg">
          <div className="flex items-center justify-center flex-shrink-0 ">
            <LogoIcon classes="w-52" />
          </div>
          <Form method="POST" className="mt-8 space-y-6">
            <FormField
              id="email"
              label="Email address"
              defaultValue=""
              name="email"
              type="email"
            />

            <FormField
              id="password"
              label="password"
              defaultValue=""
              name="password"
              type="password"
            />

            <SubmitButton name="Log In" isSubmitting={isSubmitting} />
            <button
              type="button"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white duration-200 bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-500 bg-blue-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={loginDemoUser}
            >
              explore the app
            </button>
          </Form>

          <div>
            <div className="mt-2 text-sm text-left text-blue-600">
              <Link to="#" className="font-medium">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 mt-3 font-semibold text-center text-gray-600 bg-white rounded-lg shadow dark:text-jet dark:bg-eerie-black mx-7 sm:px-10 ">
        Need an account?
        <Link to="/register">
          <span className="ml-2 text-blue-600 cursor-pointer">Register</span>
        </Link>
      </div>
    </FormWrapper>
  );
};

export default Login;
