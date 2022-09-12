import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { clearStore } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { LogoutIcon } from '@heroicons/react/outline'
import { LogoIcon } from '../../assets';

import { navigation } from "../../utils/navLinks"
import ToggleButton from '../ToggleButton';
import toast from 'react-hot-toast';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function DesktopSideBar({ user }) {
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


    return <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 dark:border-jet bg-white dark:bg-eerie-black">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <LogoIcon classes="w-52" />
                </div>

                <nav className="mt-5 flex-1 px-2 space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={classNames(
                                location.pathname.slice(1) === item.path
                                    ? 'bg-cornflower-300/30 dark:bg-rich-black'
                                    :
                                    'text-gray-600 dark:hover:bg-rich-black hover:bg-cornflower-300/30',
                                'group flex items-center px-2 py-2 text-sm md:text-lg font-medium rounded-md text-gray-600 dark:text-jet'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    location.pathname.slice(1) === item.path ? 'text-cornflower-400' : 'text-gray-400 group-hover:text-cornflower-400',
                                    'mr-3 flex-shrink-0 h-6 w-6 '
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <ToggleButton />
            <div className="flex-shrink-0 flex mt-5 border-t  dark:border-jet border-gray-200 p-4 ">
                <Link to="#" className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                        <div>
                            <div className='flex-shrink-0 h-8 w-8 bg-blue-600 flex items-center justify-center rounded-full text-white uppercase'>{user?.username.charAt(0)}</div>
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
    </div>

}

export default DesktopSideBar


//

//                                 'group flex items-center px-2 py-2 text-sm md:text-lg font-medium rounded-md dark:text-jet'