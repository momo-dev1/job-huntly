import React from 'react';
import { useDispatch } from 'react-redux';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { setMultiSelection } from '../store/jobSlice';
import { skillOptions } from '../utils/data';

const animatedComponents = makeAnimated();

const MultiSelect = () => {
    const dispatch = useDispatch()
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: "1px solid #11182780",
            boxShadow: "none",
            '&:hover': {
                border: "1px solid #11182780",
            },
        }),
    }
    const handleInputChange = (selectedOption) => {
        const values = selectedOption.map(item => item.value)
        dispatch(setMultiSelection(values))
    }
    return (
        <Select
            styles={customStyles}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={skillOptions}
            onChange={handleInputChange}
        />
    );
}
export default MultiSelect