import React from "react";
import FormField from "./FormField";
import FormSelect from "./FormSelect";
import { useSelector, useDispatch } from "react-redux";
import { setSelection, clearFilters } from "../store/jobListingSlice";

const Search = () => {
  const { search, searchStatus, searchType, sortBy, sortOptions } = useSelector(
    (state) => state.jobListing
  );
  const { positionType, statusType } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setSelection({ name, value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 overflow-hidden rounded-lg shadow-md dark:shadow-xl">
        <div className="px-4 py-5 bg-white dark:bg-eerie-black sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            {/* col 1 */}
            <div className="col-span-6 sm:col-span-3 ">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 md:col-span-1">
                  <FormField
                    id="search"
                    label="search"
                    value={search}
                    onChange={handleInputChange}
                    name="search"
                    type="text"
                  ></FormField>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <FormSelect
                    id="search Type"
                    label="search Type"
                    value={searchType}
                    list={["all", ...positionType]}
                    onChange={handleInputChange}
                    name="searchType"
                  ></FormSelect>
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div className="col-span-6 sm:col-span-3 ">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 md:col-span-1">
                  <FormSelect
                    id="status Type"
                    label="status Type"
                    value={searchStatus}
                    list={["all", ...statusType]}
                    onChange={handleInputChange}
                    name="searchStatus"
                  ></FormSelect>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <FormSelect
                    id="sort"
                    label="sort"
                    value={sortBy}
                    list={sortOptions}
                    onChange={handleInputChange}
                    name="sortBy"
                  ></FormSelect>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 p-4 dark:bg-eerie-black/40">
          <button
            onClick={() => dispatch(clearFilters())}
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
