import { Fragment } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../ToggleButton";
import { LogoIcon } from "../../assets";
import { navigation } from "../../utils/data";
import { LogoutIcon, XIcon } from "@heroicons/react/outline";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import toast from "react-hot-toast";
import { useDashboardContext } from "../../pages/dashboard/DashboardLayout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MobileSideBar() {
  const { user, showSidebar, setShowSidebar } = useDashboardContext();
  const handleSignOut = () => {
    toast.success(`GoodBye ${user?.username}`);
  };

  return (
    <Transition show={showSidebar} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 flex md:hidden "
        onClose={() => setShowSidebar(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75 " /> */}
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white dark:bg-eerie-black">
            <TransitionChild
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 pt-2 -mr-12">
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setShowSidebar(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4 ">
                <LogoIcon classes="w-40" />
              </div>
              <nav className="px-2 mt-5 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={classNames(
                      location.pathname.slice(1) === item.path
                        ? "bg-cornflower-300/30 dark:bg-rich-black"
                        : "text-gray-600 dark:hover:bg-rich-black hover:bg-cornflower-300/30",
                      "group flex items-center px-2 py-2 text-sm md:text-lg font-medium rounded-md text-gray-600 dark:text-jet"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        location.pathname.slice(1) === item.path
                          ? "text-cornflower-400"
                          : "text-gray-400 group-hover:text-cornflower-400",
                        "mr-3 flex-shrink-0 h-6 w-6 "
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <ToggleButton />
            <div className="flex flex-shrink-0 p-4 mt-5 border-t border-gray-200">
              <Link to="#" className="flex-shrink-0 block w-full group">
                <div className="flex items-center ">
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 text-white capitalize bg-blue-600 rounded-full">
                        {user?.username.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full ml-3">
                    <div>
                      <p className="font-medium text-gray-700 capitalize text-md dark:text-jet">
                        {user?.username}
                      </p>
                      <Link to="/profile">
                        <p className="text-xs font-medium text-gray-500">
                          View profile
                        </p>
                      </Link>
                    </div>
                    <LogoutIcon
                      onClick={handleSignOut}
                      className="w-6 h-6 text-gray-700 dark:text-jet dark:hover:text-red-600 hover:text-red-600 "
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </TransitionChild>
        <div className="flex-shrink-0 w-14">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition>
  );
}

export default MobileSideBar;
