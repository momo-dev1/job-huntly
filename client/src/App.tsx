import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  Landing,
  Login,
  Register,
  HomeLayout,
  DashboardLayout,
  AddJob,
  EditJob,
  JobListing,
  Profile,
  Reports,
  Admin,
  Error,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/dashboard/DashboardLayout";
import { action as addJobAction } from "./pages/dashboard/AddJob";
import { loader as allJobsLoader } from "./pages/dashboard/JobListing";
import { loader as editJobLoader } from "./pages/dashboard/EditJob";
import { action as editJobAction } from "./pages/dashboard/EditJob";
import { action as deleteJobAction } from "./pages/dashboard/DeleteJob";
import { loader as adminLoader } from "./pages/dashboard/Admin";
import { action as profileAction } from "./pages/dashboard/Profile";
import { loader as statsLoader } from "./pages/dashboard/Reports";
import ErrorElement from "./components/ErrorElement";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction(queryClient),
      },
      {
        path: "dashboard",
        element: <DashboardLayout queryClient={queryClient} />,
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction(queryClient),
          },
          {
            path: "stats",
            element: <Reports />,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "jobs-list",
            element: <JobListing />,
            loader: allJobsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction(queryClient),
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader(queryClient),
            action: editJobAction(queryClient),
          },
          { path: "delete-job/:id", action: deleteJobAction(queryClient) },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
