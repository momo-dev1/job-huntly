import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { DesktopSideBar, MobileSideBar, HamburgerNav } from '../components';


const SharedLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { user } = useSelector(state => state.user)
    return (

        <div>
            <MobileSideBar user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <DesktopSideBar user={user} />

            <div className="md:pl-64 flex flex-col flex-1 ">
                <HamburgerNav setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 p-4 py-10 md:py-20 px-10">
                    <Outlet />
                </main>
            </div>
        </div>

    )
}

export default SharedLayout