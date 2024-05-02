import React, { ChangeEvent } from "react";
interface IProps {
  id: string;
  defaultValue: string;
  name: string;
  type: string;
  label: string;
}

const FormField = ({ id, defaultValue, name, type, label }: IProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-600 capitalize dark:text-jet"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          type={type}
          name={name}
          defaultValue={defaultValue || ""}
          required
          className="block w-full px-3 py-2 text-gray-600 bg-white dark:text-white dark:bg-rich-black/50 border border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
        />
      </div>
    </div>
  );
};

export default FormField;
