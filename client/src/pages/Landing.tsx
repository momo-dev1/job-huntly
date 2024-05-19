import { Link } from "react-router-dom";
import { LogoIcon, HeroImg } from "../assets";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ToggleButton from "../components/ToggleButton";

const Landing = () => {
  return (
    <>
      <section className="container mx-auto dark:bg-eerie-black ">
        <header className="sticky inset-0 z-50 bg-white shadow-md dark:shadow-2xl dark:bg-eerie-black">
          <nav className="flex items-center justify-between w-full px-4 py-3 lg:px-10">
            <div className="flex items-center flex-shrink-0">
              <LogoIcon classes="h-16" />
            </div>
            <div className="lg:mr-10">
              <ToggleButton />
            </div>
          </nav>
        </header>

        {/* hero */}
        <main className="relative px-5 py-16 lg:px-10">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <HeroImg />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 mix-blend-multiply rounded-2xl" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 rounded-2xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Track your</span>
                  <span className="block mt-2 text-indigo-200">
                    job application
                  </span>
                </h1>
                <p className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 lg:text-xl sm:max-w-3xl">
                  Stay updated with our job application tracker. It provides
                  real-time status of your applications, sending timely updates
                  and notifications. From interview calls to offer letters, it
                  keeps you informed, streamlining the process
                </p>
                <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link
                      to="/register"
                      className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
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

        {/* Faq */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </section>
    </>
  );
};
export default Landing;
