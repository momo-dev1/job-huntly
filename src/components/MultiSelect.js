import React from 'react';
import { useDispatch } from 'react-redux';
import { skillOptions } from '../utils/data';
import { setMultiSelection } from '../store/jobSlice';
import Select, { components } from 'react-select';

const MultiSelect = ({ value, setValue }) => {

    const dispatch = useDispatch()
    const handleInputChange = (selectedOption) => {
        const values = selectedOption.map(item => item.value)
        setValue(selectedOption)
        dispatch(setMultiSelection(values))
    }

    const { Option, SingleValue } = components;

    const IconOption = (props) => (
        <Option {...props}>
            <img className="maybeUseClassName" src={props.data.image} style={{ width: 100 }} alt="" />
        </Option>
    );
    const ValueOption = (props) => (
        <SingleValue {...props}>
            <img className="maybeUseClassName" src={props.data.image} style={{ width: 100 }} alt="" />
        </SingleValue>
    );
    return (
        <>
            <Select
                className="my-react-select-container"
                classNamePrefix="my-react-select"
                closeMenuOnSelect={false}
                isClearable
                value={value}
                isMulti
                options={skillOptions}
                components={{ Option: IconOption, SingleValue: ValueOption }}
                onChange={handleInputChange}
            />
        </>
    );
}
export default MultiSelect
