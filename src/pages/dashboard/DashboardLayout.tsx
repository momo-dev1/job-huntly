import { Outlet, redirect, useNavigate, useNavigation } from "react-router-dom";
import { Loading, SideBar } from "../../components";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import fetchJson from "../../utils/fetchJson";
import { toast } from "react-hot-toast";
import { useQuery, QueryClient } from "@tanstack/react-query";

const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await fetchJson.get("/users/current-user");
    return data;
  },
};

export const loader = (queryClient: QueryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect("/");
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type User = any; // Replace 'any' with the actual type of your user

// Define the type for the context value
interface DashboardContextValue {
  user: User;
  showSidebar: boolean;
  toggleSidebar: () => void;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  logoutUser: () => void;
}

const DashboardContext = createContext({});

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

  const logoutUser = useCallback(async () => {
    navigate("/");
    await fetchJson.get("/auth/logout");
    queryClient.invalidateQueries();
    toast.success("Logging out...");
  }, [navigate, queryClient]);

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
  }, [isAuthError, logoutUser]);

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        setShowSidebar,
        logoutUser,
      }}
    >
      <SideBar />

      <div className="flex flex-col flex-1 md:pl-64 bg-greyish dark:bg-rich-black">
        <main className="relative flex-1 min-h-[calc(100vh-64px)] p-4 px-10 py-10 md:pt-20">
          {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
        </main>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () =>
  useContext(DashboardContext) as DashboardContextValue;
export default DashboardLayout;
