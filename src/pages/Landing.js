import React from "react";
import { Link } from "react-router-dom"
import { LogoIcon, HeroImg } from "../assets";


const Landing = () => {
    return (
        <>
            <section className="container mx-auto">
                <header >
                    <nav className="px-5 py-3">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <LogoIcon classes="w-32 xl:w-52" />
                        </div>
                    </nav>
                </header>

                {/* hero */}
                <main className="relative p-4">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 " />
                    <div className="mx-auto  sm:px-6 lg:px-8">
                        <div className="relative shadow-xl rounded-2xl sm:overflow-hidden">
                            <div className="absolute inset-0">
                                <HeroImg />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 mix-blend-multiply rounded-2xl" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 rounded-2xl">
                                <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Track your</span>
                                    <span className="block mt-2 text-indigo-200">job application</span>
                                </h1>
                                <p className="max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200 sm:max-w-3xl">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                    amet fugiat veniam occaecat fugiat aliqua.
                                </p>
                                <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                        <Link to="/register"
                                            className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 sm:px-8"
                                        >
                                            Sign up
                                        </Link>
                                        <Link to="/login"
                                            className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                        >
                                            Sign in
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
export default Landing