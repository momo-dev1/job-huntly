import React from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormField, SubmitButton, FormWrapper } from "../components"

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

        <FormWrapper>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[600px]">
                <div className="px-6 py-8 bg-white shadow w-[300px] sm:w-[400px] ">
                    <div>
                        logo
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 space-y-6"
                    >
                        <FormField FormField
                            id="email"
                            label="Email address"
                            register={register}
                            isRegister={true}
                            registerName="email"
                            name="email"
                            type="text"
                        >
                            {/* <div className="flex flex-col gap-1 mt-1">
                                            {errors.email?.message && (
                                                <span className="text-sm text-red-500">
                                                    {errors?.email?.message}
                                                </span>
                                            )}

                                        </div> */}
                        </FormField>

                        <FormField FormField
                            id="username"
                            label="Username"
                            register={register}
                            isRegister={true}
                            registerName="username"
                            name="username"
                            type="text"
                        >
                            {/* {errors?.username?.message && (
                                            <span className="text-sm text-red-500">
                                                {errors?.username?.message}
                                            </span>
                                        )} */}
                        </FormField>



                        <FormField
                            id="password"
                            label="Password"
                            register={register}
                            isRegister={true}
                            registerName="password"
                            name="password"
                            type="password"
                        >
                            {/* {errors?.password?.message && (
                                            <span className="text-sm text-red-500">
                                                {errors?.password?.message}
                                            </span>
                                        )} */}
                        </FormField>

                        <FormField
                            id="confirm password"
                            label="Confirm Password"
                            register={register}
                            isRegister={true}
                            registerName="confirmPassword"
                            name="confirm password"
                            type="password"
                        >
                            {/* {errors.confirmPassword?.message && (
                                            <span className="text-sm text-red-500">
                                                {errors.confirmPassword?.message}
                                            </span>
                                        )} */}
                        </FormField>


                        <SubmitButton name="Sign up" />
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
        </FormWrapper>
    );
}

export default Register

