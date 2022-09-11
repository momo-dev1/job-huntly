import { Fragment, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ToggleButton from '../ToggleButton';
import { LogoIcon } from '../../assets';
import { navigation } from "../../utils/navLinks"
import { clearStore } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { LogoutIcon, XIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import toast from 'react-hot-toast';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MobileSideBar({ user, sidebarOpen, setSidebarOpen }) {
    const [signOut, setSignOut] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch();

    const handleSignOut = () => {
        setSignOut(true)
        toast.success(`GoodBye ${ user?.username }`)
    }
    useEffect(() => {
        if (signOut) {
            const timeOut = setTimeout(() => {
                dispatch(clearStore())
            }, 1500)
            return () => clearTimeout(timeOut)
        }
    }, [signOut, dispatch])

    return <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden " onClose={setSidebarOpen}>
            <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Dialog.Overlay className="fixed inset-0 bg-opacity-75 bg-gray-600 " />
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
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-eerie-black">
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
                        <div className="flex items-center flex-shrink-0 px-4 ">
                            <LogoIcon classes="w-40" />
                        </div>
                        <nav className="mt-5 px-2 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={classNames(
                                        location.pathname.slice(1) === item.path
                                            ? 'bg-gray-100 dark:bg-rich-black text-gray-900 dark:text-jet ' : 'text-gray-600 dark:hover:bg-rich-black hover:bg-gray-50 hover:text-gray-900 dark:hover:text-jet',
                                        'group flex items-center px-2 py-2 text-sm md:text-lg font-medium rounded-md dark:text-jet'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <ToggleButton />
                    <div className="flex-shrink-0 mt-5 flex border-t border-gray-200 p-4">
                        <Link to="#" className="flex-shrink-0 group block w-full">
                            <div className="flex items-center ">
                                <div>
                                    <div>
                                        <div className='h-8 w-8 bg-blue-600 flex items-center justify-center rounded-full text-white capitalize'>{user?.username.charAt(0)}</div>
                                    </div>
                                </div>
                                <div className="ml-3 flex items-center justify-between w-full">
                                    <div>
                                        <p className="text-md font-medium text-gray-700 dark:text-jet capitalize">{user?.username}</p>
                                        <Link to="/profile">
                                            <p className="text-xs font-medium text-gray-500">
                                                View profile
                                            </p>
                                        </Link>
                                    </div>
                                    <LogoutIcon onClick={handleSignOut} className='h-6 w-6 text-gray-700 dark:text-jet dark:hover:text-red-600 hover:text-red-600 ' />
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