import React from 'react'
import { changePage } from '../store/jobListingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'


const Paginitaion = () => {
    const { numOfPages, currentPage } = useSelector(state => state.jobListing)
    const dispatch = useDispatch()

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    });

    const nextBtn = () => {
        let newPage = currentPage + 1
        if (newPage > numOfPages) {
            newPage = 1
        }
        dispatch(changePage(newPage))
    }
    const prevBtn = () => {
        let newPage = currentPage - 1
        if (newPage < 1) {
            newPage = numOfPages
        }
        dispatch(changePage(newPage))
    }

    return (
        <div className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-greyish sm:px-6">

            <div className=" flex-1 flex items-center justify-between">

                <div className='ml-auto'>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                        <button
                            onClick={prevBtn}
                            className="relative inline-flex items-center px-2 dark:bg-eerie-black dark:border-greyish py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {pages.map((pageNumber) => {
                            return <button
                                onClick={() => dispatch(changePage(pageNumber))}
                                className={`${ pageNumber === currentPage ? ' z-10 bg-indigo-50 dark:bg-indigo-500  border-indigo-500 text-indigo-600 dark:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium ' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-eerie-black ' }dark:border-greyish`}
                            >
                                {pageNumber}
                            </button>
                        })}

                        <button
                            onClick={nextBtn}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:bg-eerie-black dark:border-greyish bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Paginitaion