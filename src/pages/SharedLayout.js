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

            <div className="md:pl-64 flex flex-col flex-1 bg-greyish dark:bg-rich-black">
                <HamburgerNav setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 p-4 py-10 md:pt-20 px-10 relative min-h-screen">
                    <Outlet />
                </main>
            </div>
        </div>

    )
}

export default SharedLayout