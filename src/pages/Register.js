import React, { useState } from "react";
import { Link } from "react-router-dom"
import { FormField, SubmitButton, FormWrapper } from "../components"
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/userSlice'


const Register = () => {
    const { user, err, isLoading } = useSelector(state => state.user)
    const [formFields, setFormFields] = useState({ email: "", username: "", password: "", confirmPassword: "" });
    const [emptyFields, setEmptyFields] = useState("");
    const isInvalid = formFields.email === "" || formFields.password === "";
    const dispatch = useDispatch()

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
            setEmptyFields("Please fill out all fields");
            return
        }
        dispatch(registerUser(formFields));
    };

    return (

        <FormWrapper>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[600px] ">
                <div className="px-6 py-8 bg-white shadow w-[300px] sm:w-[400px] rounded-lg">
                    <div>
                        logo
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-6"
                    >
                        {err ? (
                            <span className="block text-sm text-center text-red-primary">
                                {err}
                            </span>
                        ) : null}
                        {emptyFields ? (
                            <span className="block text-sm text-center text-red-primary mt-2">
                                {emptyFields}
                            </span>
                        ) : null}

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
                        <div className="mx-auto font-medium text-gray-600 w-full">
                            By signing up, you agree to our  Terms , Data Policy and
                            Cookies
                            Policy.
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mt-3 font-semibold text-center  bg-white
                  text-gray-600 shadow sm:px-10 rounded-lg">
                Have an account?
                <Link to="/login">
                    <span className="ml-2  text-blue-600  cursor-pointer">
                        Log In
                    </span>
                </Link>
            </div>
        </FormWrapper>
    );
}

export default Register

