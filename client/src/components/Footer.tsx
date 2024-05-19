import { Link } from "react-router-dom";
import { LogoIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="px-5 py-5 bg-white dark:bg-eerie-black lg:px-10">
      <hr className="mt-16 mb-10 border-gray-800 dark:border-jet " />
      <div className="flex flex-wrap items-center justify-between">
        <LogoIcon classes="h-12" />

        <ul className="flex items-center space-x-3 md:order-3">
          <li>
            <Link
              to="https://github.com/momo-dev1/job-huntly"
              title=""
              className="flex items-center justify-center w-10 h-10 text-gray-500 transition-all duration-200 bg-transparent border rounded-full dark:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:text-white"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>

        <p className="w-full mt-8 text-sm text-center text-gray-500 dark:text-jet md:mt-0 md:w-auto md:order-2">
          © Copyright 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
