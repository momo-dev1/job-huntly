import { skillOptions } from "../utils/data";
import Select, { components } from "react-select";

const MultiSelect = ({ name, defaultValue }) => {
  const { Option, SingleValue } = components;
  const filtered = skillOptions.filter((s) => defaultValue.includes(s.value));
  const IconOption = (props) => (
    <Option {...props}>
      <img
        className="maybeUseClassName"
        src={props.data.image}
        style={{ width: 100 }}
        alt=""
      />
    </Option>
  );
  const ValueOption = (props) => (
    <SingleValue {...props}>
      <img
        className="maybeUseClassName"
        src={props.data.image}
        style={{ width: 100 }}
        alt=""
      />
    </SingleValue>
  );
  return (
    <>
      <Select
        className="my-react-select-container"
        classNamePrefix="my-react-select"
        closeMenuOnSelect={false}
        name={name}
        isClearable
        defaultValue={filtered}
        isMulti
        options={skillOptions}
        components={{ Option: IconOption, SingleValue: ValueOption }}
      />
    </>
  );
};
export default MultiSelect;
