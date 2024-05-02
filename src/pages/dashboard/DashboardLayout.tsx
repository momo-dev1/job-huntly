import React from "react";
import { Outlet, redirect, useNavigate, useNavigation } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar, Loading } from "../components";
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
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
