import { Link, useLocation } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/outline";
import { LogoIcon } from "../../assets";

import { navigation } from "../../utils/data";
import ToggleButton from "../ToggleButton";
import { useDashboardContext } from "../../pages/dashboard/DashboardLayout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DesktopSideBar() {
  const { user, logoutUser } = useDashboardContext();
  const location = useLocation();
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-1 min-h-0 bg-white shadow-lg dark:bg-eerie-black">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <LogoIcon classes="w-52" />
          </div>

          <nav className="flex-1 px-2 mt-5 space-y-1">
            {navigation.map((item) => {
              if (item.path === "/dashboard/admin" && user.role !== "admin")
                return;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={classNames(
                    "group flex items-center px-2 py-2 text-sm md:text-lg font-medium rounded-md text-gray-600 dark:text-jet hover:bg-cornflower-300/30 dark:hover:bg-rich-black"
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
          </nav>
        </div>
        <ToggleButton />
        <div className="flex flex-shrink-0 p-4 mt-5 shadow-2xl">
          <Link to="#" className="flex-shrink-0 block w-full group">
            <div className="flex items-center">
              <div>
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-white uppercase bg-blue-600 rounded-full">
                  {user?.username.charAt(0)}
                </div>
              </div>
              <div className="flex items-center justify-between w-full ml-3">
                <div>
                  <p className="font-medium text-gray-700 capitalize text-md dark:text-jet">
                    {user?.username}
                  </p>
                </div>
                <LogoutIcon
                  onClick={logoutUser}
                  className="w-6 h-6 text-gray-700 duration-150 hover:translate-x-1 dark:text-jet dark:hover:text-red-600 hover:text-red-600"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DesktopSideBar;
