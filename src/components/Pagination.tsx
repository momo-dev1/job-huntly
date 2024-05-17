import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useLocation, useNavigate } from "react-router-dom";

const Paginitaion = ({ numberOfPages, currentPage }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const pages = Array.from({ length: numberOfPages }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const nextBtn = () => {
    let newPage = currentPage + 1;
    if (newPage > numberOfPages) newPage = 1;
    handlePageChange(newPage);
  };

  const prevBtn = () => {
    let newPage = currentPage - 1;
    if (newPage < 1) newPage = numberOfPages;
    handlePageChange(newPage);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-greyish sm:px-6">
      <div className="flex items-center justify-between flex-1 ">
        <div className="ml-auto">
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={prevBtn}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 dark:bg-eerie-black dark:border-greyish rounded-l-md hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>

            {pages.map((pageNumber) => {
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`${
                    pageNumber === currentPage
                      ? " z-10 bg-indigo-50 dark:bg-indigo-500  border-indigo-500 text-indigo-600 dark:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium "
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-eerie-black "
                  }dark:border-greyish`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={nextBtn}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md dark:bg-eerie-black dark:border-greyish hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginitaion;
