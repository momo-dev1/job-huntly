import React, { useEffect } from "react";
import { getStats } from "../../store/jobListingSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProgressChart, BarChart } from "../../components";

const Reports = () => {
  const { stats, monthlyApplications, totalStats } = useSelector(
    (state) => state.jobListing
  );

  const dispatch = useDispatch();

  function getPrecentage(value: number) {
    return (value / totalStats) * 100;
  }

  const statsArray = [
    {
      state: "applied",
      count: stats.applied,
      percentage: getPrecentage(stats.applied) + "%",
    },
    {
      state: "pending",
      count: stats.pending,
      percentage: getPrecentage(stats.pending) + "%",
    },
    {
      state: "interview",
      count: stats.interview,
      percentage: getPrecentage(stats.interview) + "%",
    },
    {
      state: "hired",
      count: stats.hired,
      percentage: getPrecentage(stats.hired) + "%",
    },
    {
      state: "rejected",
      count: stats.rejected,
      percentage: getPrecentage(stats.rejected) + "%",
    },
  ];

  const colorKey = {
    applied: "#06b6d4",
    pending: "#eab308",
    interview: "#3b82f6",
    hired: "#22c55e",
    rejected: "#ef4444",
  };

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  return (
    <>
      <ProgressChart colorKey={colorKey} statsArray={statsArray} />
      <BarChart chartData={monthlyApplications} />
    </>
  );
};

export default Reports;
