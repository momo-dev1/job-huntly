import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { signOut } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import {
    ChartBarIcon,
    BriefcaseIcon,
    UserCircleIcon,
    PlusCircleIcon,
    LogoutIcon,
    XIcon,
} from '@heroicons/react/outline'


const navigation = [
    { name: 'Job Listing', path: 'job-listing', icon: BriefcaseIcon, current: true },
    { name: 'Add Job', path: 'add-job', icon: PlusCircleIcon, current: false },
    { name: 'Profile', path: 'profile', icon: UserCircleIcon, current: false },
    { name: 'Reports', path: 'reports', icon: ChartBarIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MobileSideBar({ user, sidebarOpen, setSidebarOpen }) {
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut())
    }
    return <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                type="button"
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="sr-only">Close sidebar</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </Transition.Child>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                alt="Workflow"
                            />
                        </div>
                        <nav className="mt-5 px-2 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-4 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                        <Link to="#" className="flex-shrink-0 group block w-full">
                            <div className="flex items-center ">
                                <div>
                                    <div>
                                        <div className='h-8 w-8 bg-blue-600 flex items-center justify-center rounded-full text-white capitalize'>{user?.username.slice(0, 1)}</div>
                                    </div>
                                </div>
                                <div className="ml-3 flex items-center justify-between w-full ">
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{user?.username}</p>
                                        <Link to="/profile">
                                            <p onClick={() => setSidebarOpen(false)}
                                                className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                                View profile
                                            </p>
                                        </Link>
                                    </div>
                                    <LogoutIcon onClick={handleSignOut} className='h-6 w-6' />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
    </Transition.Root>
}

export default MobileSideBar