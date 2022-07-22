import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormField } from '../../components'

const Profile = () => {
    const { user, isLoading } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        username: user?.username || "",
        email: user?.email || "",
        lastName: user?.lastName || "",
        location: "",
    })
    const [emptyFields, setEmptyFields] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userData.name || !userData.lastName || !userData.email || !userData.location) {
            setEmptyFields("Please fill out all fields");
            return
        };
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <div>
            <h2 className='text-2xl font-semibold tracking-wide '>Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow-md rounded-lg mt-5">
                    <div className="px-4 py-5 bg-white sm:p-6">
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
                                    id="lastname"
                                    label="Last Name"
                                    value={userData.lastName}
                                    onChange={handleInputChange}
                                    name="lastname"
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
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile