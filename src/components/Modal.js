import { ExclamationIcon } from '@heroicons/react/solid'
import { deleteJob, hideModal } from '../store/jobSlice';
import { useSelector, useDispatch } from 'react-redux';

const Modal = () => {
    const { deleteId } = useSelector(state => state.job)
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(hideModal())
        dispatch(deleteJob(deleteId))
    }
    return (
        <div className="absolute inset-0 z-10 " >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-white/30 backdrop-blur-sm" />
                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl dark:bg-eerie-black sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="sm:flex sm:items-start">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationIcon className="w-6 h-6 text-red-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-jet">
                                Delete job
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500 dark:text-greyish">
                                    Are you sure you want to delete your job? All of your data will be permanently removed
                                    from our servers forever. This action cannot be undone.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                            onClick={() => dispatch(hideModal())}
                        >
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Modal;