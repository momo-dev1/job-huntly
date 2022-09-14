import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FormField, SubmitButton, FormWrapper } from "../components"
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/userSlice'
import { LogoIcon } from "../assets";
import toast from "react-hot-toast";


const Register = () => {
    const { isLoading, user } = useSelector(state => state.user)
    const [formFields, setFormFields] = useState({ email: "", username: "", password: "", confirmPassword: "" });
    const isInvalid = formFields.email === "" || formFields.password === "";
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        }
        dispatch(registerUser(formFields));
        setFormFields({ email: "", username: "", password: "", confirmPassword: "" });
        setTimeout(() => {
            navigate("/login");
        }, 2000);

    };

    useEffect(() => {
       if (user) {
         navigate('/')
    }
  }, [user, navigate])
    
    return (

        <FormWrapper>
            <div className="mt-8 sm:mx-auto sm:w-full max-w-[600px] px-7">
                <div className="px-6 py-8 bg-white shadow max-w-[400px] rounded-lg">
                    <div className="flex items-center justify-center flex-shrink-0">
                        <LogoIcon classes="w-52" />
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-6"
                    >
                        <FormField FormField
                            id="email"
                            label="Email address"
                            value={formFields.email}
                            onChange={handleInputChange}
                            name="email"
                            type="email"
                        >
                        </FormField>

                        <FormField FormField
                            id="username"
                            label="Username"
                            value={formFields.username}
                            onChange={handleInputChange}
                            name="username"
                            type="text"
                        >
                        </FormField>

                        <FormField
                            id="password"
                            label="Password"
                            value={formFields.password}
                            onChange={handleInputChange}
                            name="password"
                            type="password"
                        >
                        </FormField>

                        <SubmitButton name="Sign up" isInvalid={isInvalid} isLoading={isLoading} />
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

