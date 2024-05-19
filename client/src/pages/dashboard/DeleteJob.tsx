import { toast } from "react-hot-toast";
import fetchJson from "../../utils/fetchJson";
import { redirect } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

export const action =
  (queryClient: QueryClient) =>
  async ({ params }) => {
    try {
      await fetchJson.delete(`/jobs/${params.id}`);
      queryClient.invalidateQueries(["jobs"]);

      toast.success("Job deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return redirect("/dashboard/jobs-list");
  };
