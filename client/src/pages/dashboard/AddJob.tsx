import toast from "react-hot-toast";
import {
  FormField,
  SectionWrapper,
  FormSelect,
  MultiSelect,
  SubmitButton,
} from "../../components";
import {
  Form,
  Link,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import { User } from "../../interfaces";
import { JOB_STATUS, JOB_POSITION, JOB_TYPE } from "../../utils/constants";
import fetchJson from "../../utils/fetchJson";
import { QueryClient } from "@tanstack/react-query";

interface IProps {
  user: User;
}

export const action =
  (queryClient: QueryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    data.skills = formData.getAll("skills");
    try {
      await fetchJson.post("/jobs", { ...data });
      queryClient.invalidateQueries(["jobs"]);
      toast.success("Job created!");
      return redirect("jobs-list");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };
const AddJob = () => {
  const navigation = useNavigation();
  const { user } = useOutletContext<IProps>();
  const isSubmitting = navigation.state === "submitting";

  return (
    <SectionWrapper title="Add Job">
      <Form method="POST">
        <div className="mt-5 rounded-lg shadow-md dark:shadow-xl">
          <div className="px-4 py-5 bg-white dark:bg-eerie-black sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <FormField
                  id="company"
                  label="company"
                  defaultValue=""
                  name="company"
                  type="text"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <FormField
                  id="location"
                  label="job location"
                  defaultValue={user.location}
                  name="location"
                  type="text"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 ">
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-1">
                    <FormSelect
                      label="status Type"
                      defaultValue={JOB_STATUS.PENDING}
                      list={Object.values(JOB_STATUS)}
                      name="jobStatus"
                    />
                  </div>

                  <div className="col-span-1">
                    <FormSelect
                      label="position Type"
                      defaultValue={JOB_POSITION.INTERN}
                      list={Object.values(JOB_POSITION)}
                      name="position"
                    />
                  </div>
                  <div className="col-span-1">
                    <FormSelect
                      label="job Type"
                      defaultValue={JOB_TYPE.FULL_TIME}
                      list={Object.values(JOB_TYPE)}
                      name="jobType"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-6 md:col-span-3 ">
                <h3 className="block mb-1 text-sm font-medium text-gray-600 capitalize dark:text-jet">
                  Skills
                </h3>
                <MultiSelect name="skills" defaultValue={"javascript"} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 p-4 dark:bg-eerie-black/40">
            <div>
              <Link
                to="../dashboard"
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear
              </Link>
            </div>
            <SubmitButton name="Submit" isSubmitting={isSubmitting} />
          </div>
        </div>
      </Form>
    </SectionWrapper>
  );
};

export default AddJob;
