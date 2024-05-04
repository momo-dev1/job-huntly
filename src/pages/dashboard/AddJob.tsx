import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FormField, SectionWrapper, FormSelect, MultiSelect, SubmitButton } from '../../components'
import { useNavigation, useOutletContext } from 'react-router-dom';
import { User } from '../../interfaces/user';

interface IProps {
    user: User
}
const AddJob = () => {
    const navigation = useNavigation();
    const { user } = useOutletContext<IProps>();
    const isEdit = false
    const isSubmitting = navigation.state === "submitting";
    const handleClearValues = () => {
    }
    return (
        <SectionWrapper title={`${isEdit ? "Edit Job" : "Add Job"}`}>
            <form method='POST'>
                <div className="mt-5 rounded-lg shadow-md dark:shadow-xl">
                    <div className="px-4 py-5 bg-white dark:bg-eerie-black sm:p-6">
                        <div className="grid grid-cols-6 gap-6">

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="company"
                                    label="company"
                                    defaultValue=''
                                    name="company"
                                    type="text"
                                >
                                </FormField>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="location"
                                    label="job location"
                                    defaultValue=''
                                    name="location"
                                    type="text"
                                >
                                </FormField>
                            </div>

                            <div className='col-span-6 sm:col-span-3 '>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="col-span-1">
                                        <FormSelect
                                            id="status"
                                            label="status Type"
                                            value={""}
                                            list={[""]}
                                            name="status"
                                            onChange={(e) => null}
                                        >
                                        </FormSelect>
                                    </div>

                                    <div className="col-span-1">
                                        <FormSelect
                                            id="position"
                                            label="position Type"
                                            value={""}
                                            list={[""]}
                                            name="position"
                                            onChange={(e) => null}
                                        >
                                        </FormSelect>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-6 md:col-span-3 ">
                                <h3 className="block mb-1 text-sm font-medium text-gray-600 capitalize dark:text-jet">Skills</h3>
                                <MultiSelect value={value} setValue={setValue} />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-end gap-2 p-4 dark:bg-eerie-black/40'>
                        <div>
                            <button
                                onClick={handleClearValues}
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Clear
                            </button>

                        </div>
                        <div className='  className="inline-flex justify-center px-6 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cornflower-300 hover:bg-cornflower-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"'>
                            <SubmitButton
                                name="Submit"
                                isSubmitting={isSubmitting}
                            />
                        </div>
                    </div>

                </div>
            </form>
        </SectionWrapper>
    )
}

export default AddJob
