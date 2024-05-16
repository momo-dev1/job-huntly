import moment from "moment";
import { Form, Link } from "react-router-dom";
import { Badge } from "./index";
import { skillsArr } from "../utils/data";
import {
  ClockIcon,
  TrashIcon,
  PencilIcon,
  CalendarIcon,
  BriefcaseIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

const JobCard = ({
  _id: id,
  jobStatus: status,
  company,
  position,
  location,
  createdAt,
  avatarColor,
  skills,
}) => {
  const date = moment(createdAt).format("MMM Do, YYYY");
  return (
    <>
      <figure className="flex flex-col justify-between max-w-2xl p-5 mt-5 mb-5 bg-white rounded-lg shadow-md dark:bg-eerie-black dark:shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-y-6 ">
          <div className="flex items-center w-full gap-5 py-3 border-b border-b-slate-100 md:border-none md:max-w-max">
            <div
              style={{ backgroundColor: avatarColor }}
              className="flex items-center justify-center flex-shrink-0 w-12 h-12 font-semibold text-white capitalize rounded-full self-baseline"
            >
              {company.charAt(0)}
            </div>
            <h3 className="text-lg font-semibold capitalize md:text-xl dark:text-jet">
              {company}
            </h3>
          </div>

          <div className="flex gap-2">
            <Form method="POST" action={`../delete-job/${id}`}>
              <button
                type="submit"
                className="p-3 border border-red-600 rounded-full"
              >
                <TrashIcon className="w-4 h-4 text-red-600 " />
              </button>
            </Form>
            <Link to={`../edit-job/${id}`}>
              <button className="p-3 border border-blue-600 rounded-full">
                <PencilIcon className="w-4 h-4 text-blue-600 " />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-2 text-sm font-semibold">
          {skillsArr
            .filter((item) => skills.includes(item.name))
            .map((skill) => (
              <Badge key={skill.name} src={skill.icon} />
            ))}
        </div>

        <div className="flex flex-wrap items-center justify-between mt-8 gap-x-2 gap-y-4">
          <span className="flex items-center gap-2">
            <BriefcaseIcon className="w-6 h-6 text-gray-400 dark:text-greyish" />
            <h5 className="font-semibold capitalize dark:text-jet">
              {position}
            </h5>
          </span>
          <span className="flex items-center gap-2">
            <LocationMarkerIcon className="w-6 h-6 text-gray-400 dark:text-greyish" />
            <h5 className="font-semibold capitalize dark:text-jet">
              {location}
            </h5>
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon className="w-6 h-6 text-gray-400 dark:text-greyish" />
            <h5 className="font-semibold capitalize dark:text-jet">{status}</h5>
          </span>
          <span className="flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-gray-400 dark:text-greyish" />
            <h5 className="font-semibold capitalize dark:text-jet">{date}</h5>
          </span>
        </div>
      </figure>
    </>
  );
};

export default JobCard;
