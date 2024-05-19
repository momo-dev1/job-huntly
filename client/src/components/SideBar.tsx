import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../utils/data";
import { useDashboardContext } from "../pages/dashboard/DashboardLayout";
import { LogoIcon } from "../assets";
import ToggleButton from "./ToggleButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  const location = useLocation();

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden dark:bg-eerie-black"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col px-6 pb-4 overflow-y-auto bg-white dark:bg-eerie-black grow gap-y-5">
                    <div className="flex items-center h-16 shrink-0">
                      <LogoIcon classes="w-32" />
                    </div>
                    <nav className="flex flex-col flex-1">
                      <ul role="list" className="flex flex-col flex-1 gap-y-7">
                        <li>
                          <ul role="list" className="space-y-1 ">
                            {navigation.map((item) => {
                              if (
                                item.path === "/dashboard/admin" &&
                                user.role !== "admin"
                              )
                                return;
                              return (
                                <li key={item.name}>
                                  <Link
                                    to={item.path}
                                    className={classNames(
                                      "group flex items-center px-2 py-2 text-sm md:text-lg font-medium rounded-md text-gray-600 dark:text-jet hover:bg-blue-300/30 dark:hover:bg-rich-black"
                                    )}
                                  >
                                    <span className="flex items-center gap-3 duration-300 group-hover:translate-x-2">
                                      <item.icon
                                        className={classNames(
                                          location.pathname === item.path
                                            ? "text-blue-400"
                                            : "text-gray-400 group-hover:text-blue-400",
                                          "h-6 w-6 shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}s
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col px-6 pb-4 overflow-y-auto bg-white shadow-lg dark:bg-eerie-black grow gap-y-5">
            <div className="flex items-center mt-2 shrink-0">
              <LogoIcon classes="w-52" />
            </div>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => {
                      if (
                        item.path === "/dashboard/admin" &&
                        user.role !== "admin"
                      )
                        return;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={classNames(
                            "group flex items-center px-2 py-2 text-sm md:text-lg font-medium rounded-md text-gray-600 dark:text-jet hover:bg-blue-300/30 dark:hover:bg-rich-black"
                          )}
                        >
                          <span className="flex items-center duration-300 group-hover:translate-x-2">
                            <item.icon
                              className={classNames(
                                location.pathname === item.path
                                  ? "text-blue-400"
                                  : "text-gray-400 group-hover:text-blue-400",
                                "mr-3 flex-shrink-0 h-6 w-6 "
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </span>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-64">
          <div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-white shadow-lg dark:bg-rich-black shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 dark:text-jet lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="w-px h-6 bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex self-stretch flex-1 gap-x-4 lg:gap-x-6">
              <div className="flex items-center ml-auto gap-x-4 lg:gap-x-6">
                <ToggleButton />

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:bg-jet"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <div>
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-white uppercase bg-blue-600 rounded-full">
                        {user?.username.charAt(0)}
                      </div>
                    </div>
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-600 dark:text-jet"
                        aria-hidden="true"
                      >
                        {user.username}
                      </span>
                      <ChevronDownIcon
                        className="w-5 h-5 ml-2 text-gray-600 dark:text-jet"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logoutUser}
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3  text-sm leading-6 text-gray-900 w-full"
                            )}
                          >
                            Sign Out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
