import { Form, Link } from "react-router-dom";
import FormField from "./FormField";
import FormSelect from "./FormSelect";
import { useSubmit } from "react-router-dom";
import { debounce } from "../utils/debounce";
import {
  JOB_SORT_BY,
  JOB_TYPE,
  JOB_POSITION,
  JOB_STATUS,
} from "../utils/constants";

const Search = ({ search, type, position, status, sort }) => {
  const submit = useSubmit();
  return (
    <Form>
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
                    defaultValue={search}
                    name="search"
                    type="text"
                    onChange={debounce((form) => submit(form))}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <FormSelect
                    label="job Types"
                    defaultValue={type}
                    list={["all", ...Object.values(JOB_TYPE)]}
                    name="type"
                    onChange={(e) => {
                      submit(e.currentTarget.form);
                    }}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <FormSelect
                    label="position"
                    defaultValue={position}
                    list={["all", ...Object.values(JOB_POSITION)]}
                    name="position"
                    onChange={(e) => {
                      submit(e.currentTarget.form);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div className="col-span-6 sm:col-span-3 ">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 md:col-span-1">
                  <FormSelect
                    label="status Type"
                    defaultValue={status}
                    list={["all", ...Object.values(JOB_STATUS)]}
                    name="status"
                    onChange={(e) => {
                      submit(e.currentTarget.form);
                    }}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <FormSelect
                    label="sort"
                    defaultValue={sort}
                    list={Object.values(JOB_SORT_BY)}
                    name="sort"
                    onChange={(e) => {
                      submit(e.currentTarget.form);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 p-4 dark:bg-eerie-black/40">
          <Link
            to="/dashboard/jobs-list"
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none"
          >
            Clear Filters
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default Search;
