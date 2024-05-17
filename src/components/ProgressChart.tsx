import { Link } from "react-router-dom";

const ProgressChart = ({ statsArray, colorKey }) => {
  return (
    <div className="flex flex-col w-full p-10 mb-8 bg-white rounded-lg shadow-md gap-9 dark:bg-eerie-black">
      <div className="flex items-center justify-between w-full mb-3 font-semibold md:text-xl text-md">
        <h3 className="dark:text-jet">My Active jobs</h3>
        <Link to="/dashboard/jobs-list">
          <h3 className="text-blue-300 hover:text-blue-400 ">See all jobs</h3>
        </Link>
      </div>

      {statsArray.map(({ state, count, percentage }) => (
        <div
          key={state}
          className="relative w-full h-3 transition rounded-full bg-jet group"
        >
          <div
            style={{ width: percentage, background: colorKey[state] }}
            className="relative h-full text-xs text-center text-white rounded-full"
          >
            {count > 0 && (
              <span
                style={{ background: colorKey[state] }}
                className="absolute opacity-0 group-hover:opacity-100 transition text-xs right-[-9px] rounded-md text-white px-2 py-1 top-[-30px] "
              >
                {count}
              </span>
            )}
          </div>
        </div>
      ))}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {statsArray.map(({ state }) => (
          <div
            key={state}
            className="flex items-center col-span-1 gap-3 font-semibold text-gray-500 capitalize dark:text-jet"
          >
            <span
              style={{ background: colorKey[state] }}
              className="w-2 h-2 rounded-full"
            ></span>
            <h3>{state}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;
