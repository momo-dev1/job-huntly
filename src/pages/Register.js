import React from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(30).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Register = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);


    return (

        <div className="relative z-10 flex items-center justify-center bg-gray-200">
            <div className="flex flex-col justify-center min-h-screen  sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[600px]">
                    <div className="px-6 py-8 bg-white shadow w-[300px] sm:w-[400px] ">
                        <div>
                            logo
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-8 space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        {...register("email")}
                                        type="text"
                                        className="block w-full px-3 py-2 text-gray-600 border bg-white border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                                    />
                                    {/* <div className="flex flex-col gap-1 mt-1">
                                            {errors.email?.message && (
                                                <span className="text-sm text-red-500">
                                                    {errors?.email?.message}
                                                </span>
                                            )}

                                        </div> */}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Username
                                </label>
                                <div className="mt-1">
                                    <input
                                        {...register("username")}
                                        type="text"
                                        className="block w-full px-3 py-2 text-gray-600 border bg-white border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                                    />
                                    {/* {errors?.username?.message && (
                                            <span className="text-sm text-red-500">
                                                {errors?.username?.message}
                                            </span>
                                        )} */}

                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        {...register("password")}
                                        type="password"
                                        className="block w-full px-3 py-2 text-gray-600 border bg-white border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                                    />
                                    {/* {errors?.password?.message && (
                                            <span className="text-sm text-red-500">
                                                {errors?.password?.message}
                                            </span>
                                        )} */}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Confirm Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        {...register("confirmPassword")}
                                        type="password"
                                        className="block w-full px-3 py-2 text-gray-600 border bg-white border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                                    />
                                    {/* {errors.confirmPassword?.message && (
                                            <span className="text-sm text-red-500">
                                                {errors.confirmPassword?.message}
                                            </span>
                                        )} */}
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium bg-blue-600 text-white bg-blue-medium border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Sign up
                                </button>
                            </div>

                        </form>

                        <div className="mt-5 text-center text-md">
                            <div className="mx-auto font-medium text-gray-600 w-full">
                                By signing up, you agree to our  Terms , Data Policy and
                                Cookies
                                Policy.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 mt-3 font-semibold text-center  bg-white
                  text-gray-600 shadow sm:px-10">
                    Have an account?
                    <Link to="/login">
                        <span className="ml-2  text-blue-600  cursor-pointer">
                            Log In
                        </span>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Register

