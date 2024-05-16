interface IProps {
  label: string;
  name: string;
  defaultValue: string;
  list: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (event: any) => void;
}
const FormSelect = ({ label, name, defaultValue, list, onChange }: IProps) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-600 capitalize dark:text-jet"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-gray-900/50 dark:text-white dark:bg-rich-black/50 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
