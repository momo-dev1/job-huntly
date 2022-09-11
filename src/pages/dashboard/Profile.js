import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormField, SectionWrapper } from '../../components'
import { updateUser } from "../../store/userSlice";

const Profile = () => {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        username: user?.username || "",
        email: user?.email || "",
        location: user?.location || "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateUser(userData))
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };
    return (
        <SectionWrapper title="Profile">
            <form onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow-md dark:shadow-xl rounded-lg mt-5">
                    <div className="px-4 py-5 bg-white dark:bg-eerie-black  sm:p-6">
                        <div className="grid grid-cols-6 gap-6">

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="username"
                                    label="User Name"
                                    value={userData.username}
                                    onChange={handleInputChange}
                                    name="username"
                                    type="text"
                                >
                                </FormField>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="email"
                                    label="Email Address"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    type="email"
                                >
                                </FormField>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="location"
                                    label="Location"
                                    value={userData.location}
                                    onChange={handleInputChange}
                                    name="location"
                                    type="text"
                                >
                                </FormField>
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center gap-2 p-4 justify-end dark:bg-eerie-black/40'>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cornflower-300 hover:bg-cornflower-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </SectionWrapper>
    )
}

export default Profile