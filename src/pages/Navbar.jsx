import { Link } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
    return (
        <div>
            <header className='p-2 flex justify-between'>
                <a href="" className='flex items-center logo p-2'>
                <img src="/catlogo.png" alt="logo" className='w-10 pr-3' />
                <span className='font-bold'>CatCnC</span>
                </a>
                <div className="flex border border-gray-300 rounded-full px-4 shadow-md shadow-gray-200">
                <div className="flex items-center">
                    <div>Breed</div>
                    <div className="border border-l border-gray-300 mx-2"></div>
                </div>
                <div className="flex items-center">
                    <div>Colour</div>
                    <div className="border border-l border-gray-300 mx-2"></div>
                </div>
                <div className="flex items-center">
                    <div>Cat Name</div>
                    <div className="border border-l border-gray-300 mx-2"></div>
                </div>
                <button className="flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                </div>

                <div className="flex border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200">
                <button className='pr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <Link to={"/login"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </Link  >
                </div>

            </header>
            </div>
    )
}