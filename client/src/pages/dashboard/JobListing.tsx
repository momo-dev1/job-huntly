import { JobCard, SectionWrapper, Search, Pagination } from "../../components";
import Loading from "../../components/Loading";
import fetchJson from "../../utils/fetchJson";
import { useLoaderData, useNavigation } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { ISearchParams, Job, LoaderData } from "../../interfaces";

const allJobsQuery = (params: ISearchParams) => {
  const { search, type, position, status, sort, page } = params;
  return {
    queryKey: [
      "jobs",
      search ?? "",
      type ?? "all",
      status ?? "all",
      position ?? "all",
      sort ?? "latest",
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await fetchJson.get("/jobs", {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    await queryClient.ensureQueryData(allJobsQuery(params));
    return { searchValues: { ...params } };
  };

const JobListing = () => {
  const { searchValues } = useLoaderData() as LoaderData;
  const {
    data: { jobCounts, numOfPages, currentPage, jobs },
  } = useQuery(allJobsQuery(searchValues));
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <SectionWrapper title="Jobs List">
      <Search {...searchValues} />
      <section className="relative ">
        {isPageLoading ? (
          <Loading />
        ) : jobs.length === 0 ? (
          <div className="mt-6 text-2xl dark:text-jet">No jobs found</div>
        ) : (
          <>
            <h5 className="mt-5 text-lg font-semibold md:text-xl dark:text-jet">
              {jobCounts} {jobCounts === 1 ? "job found" : "jobs found"}
            </h5>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {jobs.map((job: Job) => (
                <JobCard key={job._id} {...job} />
              ))}
            </div>
            <Pagination numberOfPages={numOfPages} currentPage={currentPage} />
          </>
        )}
      </section>
    </SectionWrapper>
  );
};

export default JobListing;
