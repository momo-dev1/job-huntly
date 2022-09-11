import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { LogoIcon } from "../assets";
import { loginUser } from '../store/userSlice'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { FormField, SubmitButton, FormWrapper } from "../components"

const Login = () => {
    const dispatch = useDispatch()
    const { user, isLoading } = useSelector(state => state.user)
    const navigate = useNavigate()
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
        if (isInvalid) {
            toast.error("Please fill out all fields");
            return
        };
        dispatch(loginUser(formFields));
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
    }, [user, navigate])

    return (

        <FormWrapper>
            <div className="mt-8 sm:mx-auto min-w-[400px] max-w-[600px] px-7">
                <div className="px-6 py-8 bg-white shadow max-w-[400px] rounded-lg">
                    <div className="flex items-center justify-center flex-shrink-0 ">
                        <LogoIcon classes="w-52" />
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                        <FormField
                            id="email"
                            label="Email address"
                            value={formFields.email}
                            onChange={handleInputChange}
                            name="email"
                            type="email"
                        />

                        <FormField
                            id="password"
                            label="password"
                            value={formFields.password}
                            onChange={handleInputChange}
                            name="password"
                            type="password"
                        />

                        <SubmitButton name="Log In" isInvalid={isInvalid} isLoading={isLoading} />
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
            <div className="mx-7 py-4 mt-3 font-semibold text-center  bg-white
                  text-gray-600 shadow sm:px-10 rounded-lg ">
                Need an account?
                <Link to="/register">
                    <span className="ml-2 text-blue-600 cursor-pointer">
                        Register
                    </span>
                </Link>
            </div>
        </FormWrapper>

    );
}

export default Login