import fetchJson from "../../utils/fetchJson";
import { toast } from "react-hot-toast";
import { redirect, useLoaderData } from "react-router-dom";
import { SectionWrapper } from "../../components";

export const loader = async () => {
  try {
    const { data } = await fetchJson.get("/users/admin/app-stats");
    return data;
  } catch (error) {
    toast.error("Your not authorized to view this page");
    return redirect("/dashboard");
  }
};
const Admin = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { users, jobs } = useLoaderData() as { users: number; jobs: number };
  return (
    <SectionWrapper title="">
      <h1 className="flex items-center justify-center text-3xl text-white capitalize h-96">
        total users: {users}
        <br />
        total jobs: {jobs}
      </h1>
    </SectionWrapper>
  );
};

export default Admin;
