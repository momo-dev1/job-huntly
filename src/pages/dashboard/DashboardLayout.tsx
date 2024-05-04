import React from "react";
import { Outlet, redirect, useNavigate, useNavigation } from "react-router-dom";
import { DesktopSideBar, MobileSideBar } from "../../components";
import { createContext, useContext, useEffect, useState } from "react";
import fetchJson from "../../utils/fetchJson";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await fetchJson.get("/users/current-user");
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

const DashboardLayout = ({ queryClient }) => {
  const { user } = useQuery(userQuery).data;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    await fetchJson.get("/auth/logout");
    queryClient.invalidateQueries();
    toast.success("Logging out...");
  };

  fetchJson.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logoutUser,
      }}
    >
      <MobileSideBar user={user} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <DesktopSideBar user={user} />

      {modalIsOpen && <Modal />}

      <div className="flex flex-col flex-1 md:pl-64 bg-greyish dark:bg-rich-black">
        <HamburgerNav setSidebarOpen={setSidebarOpen} />
        <main className="relative flex-1 min-h-screen p-4 px-10 py-10 md:pt-20">
          {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
        </main>
      </div>

    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
