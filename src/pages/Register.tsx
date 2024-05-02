import React from "react";
import { Link, redirect, useNavigation } from "react-router-dom"
import { FormField, SubmitButton, FormWrapper } from "../components"
import { LogoIcon } from "../assets";
import toast from "react-hot-toast";
import fetchJson from "../utils/fetchJson";


export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await fetchJson.post('/auth/register', data);
        toast.success('Registration successful!');
        return redirect('/login');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return null;
    }
};
const Register = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (

        <FormWrapper>
            <div className="mt-8 sm:mx-auto sm:w-full max-w-[600px] px-7">
                <div className="px-6 py-8 bg-white shadow max-w-[400px] rounded-lg">
                    <div className="flex items-center justify-center flex-shrink-0">
                        <LogoIcon classes="w-52" />
                    </div>

                    <form
                        method="POST"

                        className="mt-8 space-y-6"
                    >
                        <FormField
                            id="email"
                            label="Email address"
                            defaultValue={'momolokii@gmail.com'}
                            name="email"
                            type="email"
                        >
                        </FormField>

                        <FormField
                            id="username"
                            label="Username"
                            defaultValue={'momolokii'}
                            name="username"
                            type="text"
                        >
                        </FormField>

                        <FormField
                            id="password"
                            label="Password"
                            defaultValue={'secretpassword123'}
                            name="password"
                            type="password"
                        >
                        </FormField>

                        <FormField
                            id="location"
                            label="Location"
                            defaultValue={'moon'}
                            name="location"
                            type="text"
                        >
                        </FormField>

                        <SubmitButton name="Sign up" isSubmitting={isSubmitting} />
                    </form>

                    <div className="mt-5 text-center text-md">
                        <div className="w-full mx-auto font-medium text-gray-600">
                            By signing up, you agree to our  Terms , Data Policy and
                            Cookies
                            Policy.
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 mt-3 font-semibold text-center text-gray-600 bg-white rounded-lg shadow mx-7 sm:px-10 ">
                Have an account?
                <Link to="/login">
                    <span className="ml-2 text-blue-600 cursor-pointer">
                        Log In
                    </span>
                </Link>
            </div>
        </FormWrapper>
    );
}

export default Register

