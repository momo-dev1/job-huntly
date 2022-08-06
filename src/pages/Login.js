import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FormField, SubmitButton, FormWrapper } from "../components"
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/userSlice'

const Login = () => {
    const dispatch = useDispatch()
    const { user, err, isLoading } = useSelector(state => state.user)
    const navigate = useNavigate()
    const [emptyFields, setEmptyFields] = useState("")
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
            setEmptyFields("Please fill out all fields");
            return
        };
        dispatch(loginUser(formFields));
    };

    useEffect(() => {
        if (emptyFields || err) {
            setTimeout(() => {
                emptyFields("")
            }, 4000);
        }
    }, [emptyFields, err, dispatch])

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/")
            }, 2000);
        }
    }, [user, navigate])
    return (

        <FormWrapper>
            <div className="mt-8 sm:mx-auto sm:w-full max-w-[600px] ">
                <div className="px-6 py-8 bg-white shadow max-w-[400px] rounded-lg">
                    <div>
                        logo
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
            <div className="px-4 py-4 mt-3 text-gray-600 font-semibold text-center bg-white shadow sm:px-10 rounded-lg">
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