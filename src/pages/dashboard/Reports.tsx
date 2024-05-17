import { QueryClient, useQuery } from "@tanstack/react-query";
import { ProgressChart, BarChart } from "../../components";
import fetchJson from "../../utils/fetchJson";

const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await fetchJson.get("/jobs/stats");
    return response.data;
  },
};

export const loader = (queryClient: QueryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data;
};

const Reports = () => {
  const { data } = useQuery(statsQuery);
  const { defaultStats, monthlyApplications } = data;

  const totalStats = Object.values(defaultStats).reduce(
    (sum: number, value: number) => sum + value,
    0
  ) as number;

  function getPrecentage(value: number) {
    return (value / totalStats) * 100;
  }

  const statsArray = [
    {
      state: "applied",
      count: defaultStats.applied,
      percentage: getPrecentage(defaultStats.applied) + "%",
    },
    {
      state: "pending",
      count: defaultStats.pending,
      percentage: getPrecentage(defaultStats.pending) + "%",
    },
    {
      state: "interview",
      count: defaultStats.interview,
      percentage: getPrecentage(defaultStats.interview) + "%",
    },
    {
      state: "hired",
      count: defaultStats.hired,
      percentage: getPrecentage(defaultStats.hired) + "%",
    },
    {
      state: "rejected",
      count: defaultStats.rejected,
      percentage: getPrecentage(defaultStats.rejected) + "%",
    },
  ];
  console.log(statsArray);

  const colorKey = {
    applied: "#06b6d4",
    pending: "#eab308",
    interview: "#3b82f6",
    hired: "#22c55e",
    rejected: "#ef4444",
  };

  return (
    <>
      <ProgressChart colorKey={colorKey} statsArray={statsArray} />
      <BarChart chartData={monthlyApplications} />
    </>
  );
};

export default Reports;
