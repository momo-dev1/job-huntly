import { QueryClient } from "@tanstack/react-query";
import { FormField, SectionWrapper, SubmitButton } from "../../components";
import { Form, redirect, useNavigation } from "react-router-dom";
import toast from "react-hot-toast";
import fetchJson from "../../utils/fetchJson";
import { useDashboardContext } from "./DashboardLayout";

export const action =
  (queryClient: QueryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await fetchJson.patch("/users/update-user", data);
      queryClient.invalidateQueries(["user"]);
      toast.success("Profile updated!");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };
const Profile = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { user } = useDashboardContext();

  return (
    <SectionWrapper title="Profile">
      <Form method="POST">
        <div className="mt-5 overflow-hidden rounded-lg shadow-md dark:shadow-xl">
          <div className="px-4 py-5 bg-white dark:bg-eerie-black sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <FormField
                  id="username"
                  label="User Name"
                  defaultValue={user.username}
                  name="username"
                  type="text"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <FormField
                  id="email"
                  label="Email Address"
                  defaultValue={user.email}
                  name="email"
                  type="email"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <FormField
                  id="location"
                  label="Location"
                  defaultValue={user.location}
                  name="location"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 p-4 dark:bg-eerie-black/40">
            <SubmitButton name="Save" isSubmitting={isSubmitting} />
          </div>
        </div>
      </Form>
    </SectionWrapper>
  );
};

export default Profile;
