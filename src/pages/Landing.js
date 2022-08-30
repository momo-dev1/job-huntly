import React from "react";
const Landing = () => {
    return (
        <>
            <section>
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Track your</span>
                                    <span className="block text-indigo-200 mt-2">job application</span>
                                </h1>
                                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                    amet fugiat veniam occaecat fugiat aliqua.
                                </p>
                                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                        <button
                                            href="#"
                                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                        >
                                            Get started
                                        </button>
                                        <button
                                            href="#"
                                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                        >
                                            Live demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="2xl:mx-auto 2xl:container w-full mt-24 flex flex-col justify-between items-center">
                    <div className="flex justify-center items-center w-full md:h-64 h-40 bg-gradient-to-l from-indigo-600 to-indigo-700" />
                    <div className="md:-mt-40 -mt-20 xl:px-40 md:px-20 px-6 flex justify-center items-center">
                        <img className="lg:w-full" src="https://i.ibb.co/mTfwGCQ/Light-Theme.png" alt="app img" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Landing