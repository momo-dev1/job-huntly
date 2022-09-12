import { Chart } from 'chart.js';
import React, { useEffect } from 'react'
import { getStats } from "../../store/jobListingSlice"
import { useDispatch, useSelector } from 'react-redux';

const Reports = () => {
    const { stats, totalStats } = useSelector(state => state.jobListing)
    const dispatch = useDispatch()

    function getPrecentage(value) {
        return (value / totalStats) * 100;
    }

    const statsArray = [
        {
            state: "applied",
            count: stats.applied,
            percentage: getPrecentage(stats.applied) + "%",
        },
        {
            state: "pending",
            count: stats.pending,
            percentage: getPrecentage(stats.pending) + "%",
        },
        {
            state: "interview",
            count: stats.interview,
            percentage: getPrecentage(stats.interview) + "%",
        },
        {
            state: "hired",
            count: stats.hired,
            percentage: getPrecentage(stats.hired) + "%",
        },
        {
            state: "rejected",
            count: stats.rejected,
            percentage: getPrecentage(stats.rejected) + "%",
        },
    ]

    const colorKey = {
        applied: "cyan",
        pending: "yellow",
        interview: "blue",
        hired: "green",
        rejected: "red",
    };

    useEffect(() => {
        dispatch(getStats())
    }, [dispatch])

    return (
        <div className="flex flex-col w-full gap-10 p-10 bg-white rounded-lg shadow-md dark:bg-eerie-black">

            {statsArray.map(({ state, count, percentage }) => (
                <div className="w-full h-2 rounded-full bg-jet group">
                    <div style={{ width: percentage }} className={`h-full  rounded-full ${ `bg-${ colorKey[state] }-500` } text-center text-xs text-white relative`}>
                        {count > 0 &&
                            <span className={`absolute opacity-0 group-hover:opacity-100 transition text-xs right-[-9px] rounded-md text-white px-2 py-1 top-[-30px] ${ `bg-${ colorKey[state] }-500` }`}>{count}</span>}
                    </div>

                </div>
            ))}

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                {statsArray.map(({ state }) => (
                    <div className="flex items-center col-span-1 gap-3 font-semibold text-gray-500 capitalize dark:text-jet">
                        <span className={`h-2 w-2 rounded-full ${ `bg-${ colorKey[state] }-500` }`}></span>
                        <h3 >{state}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reports

{/* <section className='flex items-center justify-center text-gray-700 '>

     <div class="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8"> */}

{/* chart-content */ }
{/* <div className='flex flex-col items-center justify-center gap-2'>
             <h2 class="text-xl font-bold">title</h2>
             <span class="text-sm font-semibold text-gray-500">year</span>
         </div> */}

{/* chart-bars */ }
{/* <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
                 <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-16 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Jan</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$45,000</span>
                 <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Feb</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                 <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Mar</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$50,000</span>
                 <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Apr</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                 <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">May</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$55,000</span>
                 <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Jun</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$60,000</span>
                 <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-16 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Jul</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$57,500</span>
                 <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-10 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Aug</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$67,500</span>
                 <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-10 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-32 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Sep</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$65,000</span>
                 <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-12 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full bg-indigo-400 h-28"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Oct</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$70,000</span>
                 <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Nov</span>
             </div>
             <div class="relative flex flex-col items-center flex-grow pb-5 group">
                 <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$75,000</span>
                 <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                 <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                 <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
                 <span class="absolute bottom-0 text-xs font-bold">Dec</span>
             </div>
         </div> */}

{/* chart-tags */ }
{/* <div class="flex w-full mt-3">
             <div class="flex items-center ml-auto">
                 <span class="block w-4 h-4 bg-indigo-400"></span>
                 <span class="ml-1 text-xs font-medium">Existing</span>
             </div>
             <div class="flex items-center ml-4">
                 <span class="block w-4 h-4 bg-indigo-300"></span>
                 <span class="ml-1 text-xs font-medium">Upgrades</span>
             </div>
             <div class="flex items-center ml-4">
                 <span class="block w-4 h-4 bg-indigo-200"></span>
                 <span class="ml-1 text-xs font-medium">New</span>
             </div>
         </div> */}

{/* </div>
 </section> */}