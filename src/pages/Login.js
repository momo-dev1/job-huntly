import React, { useState } from "react";
import { Link } from "react-router-dom"

const Login = () => {
    const [error, setError] = useState(false);
    const [formFields, setFormFields] = useState({ email: "", password: "" });
    const isInvalid = formFields.email === "" || formFields.password === "";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formFields);
    };

    return (

        <div className="relative z-10 flex items-center justify-center bg-gray-200">
            <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[600px]">
                    <div className="px-6 py-8 bg-white shadow w-[300px] sm:w-[400px] ">
                        <div>
                            logo
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            {error.signError && (
                                <span className="block text-sm text-center text-red-primary">
                                    {error.signError}
                                </span>
                            )}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        value={formFields.email}
                                        onChange={handleInputChange}
                                        name="email"
                                        type="email"
                                        required
                                        className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        value={formFields.password}
                                        onChange={handleInputChange}
                                        name="password"
                                        type="password"
                                        required
                                        className="block w-full px-3 py-2 text-gray-600 border bg-white border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    disabled={isInvalid}
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium bg-blue-600 text-white bg-blue-medium border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Log In
                                </button>
                            </div>
                        </form>

                        <div>
                            <div className="mt-2 text-sm  text-blue-600 text-left">
                                <Link to="#" className="font-medium">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 mt-3 text-gray-600 font-semibold text-center bg-white shadow sm:px-10">
                    Need an account?
                    <Link to="/register">
                        <span className="ml-2 text-blue-600 cursor-pointer">
                            Register
                        </span>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Login