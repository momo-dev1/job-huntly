import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { DesktopSideBar, MobileSideBar, HamburgerNav, Modal } from '../components';

const SharedLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { user } = useSelector(state => state.user)
    const { modalIsOpen } = useSelector(state => state.job)

    return (

        <div >
            <MobileSideBar user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <DesktopSideBar user={user} />

            {modalIsOpen && <Modal />}

            <div className="flex flex-col flex-1 md:pl-64 bg-greyish dark:bg-rich-black">
                <HamburgerNav setSidebarOpen={setSidebarOpen} />
                <main className="relative flex-1 min-h-screen p-4 px-10 py-10 md:pt-20">
                    <Outlet />
                </main>
            </div>
        </div>

    )
}

export default SharedLayout