import React from "react";
import toast from "react-hot-toast";
import { LogoIcon } from "../assets";
import { Link, redirect, useNavigation } from "react-router-dom";
import { FormField, SubmitButton, FormWrapper } from "../components";
import fetchJson from "../utils/fetchJson";

interface FormFields {
  email: string;
  password: string;
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await fetchJson.get("/auth/login", data);
    toast.success("Login successful!");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};
const Login = () => {
 const navigation = useNavigation();
 const isSubmitting = navigation.state === "submitting";
 
  return (
    <FormWrapper>
      <div className="mt-8 sm:mx-auto min-w-[400px] max-w-[600px] px-7">
        <div className="px-6 py-8 bg-white shadow max-w-[400px] rounded-lg">
          <div className="flex items-center justify-center flex-shrink-0 ">
            <LogoIcon classes="w-52" />
          </div>
          <form method=""  className="mt-8 space-y-6">
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

            <SubmitButton
              name="Log In"
              isSubmitting={isSubmitting}
            />
          </form>

          <div>
            <div className="mt-2 text-sm text-left text-blue-600">
              <Link to="#" className="font-medium">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 mt-3 font-semibold text-center text-gray-600 bg-white rounded-lg shadow mx-7 sm:px-10 ">
        Need an account?
        <Link to="/register">
          <span className="ml-2 text-blue-600 cursor-pointer">Register</span>
        </Link>
      </div>
    </FormWrapper>
  );
};

export default Login;
