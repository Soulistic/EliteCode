import { auth } from '@/firebase/firebase';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';

type TopbarProps = {
    
};

const Topbar:React.FC<TopbarProps> = () => {
    const [user]=useAuthState(auth)
    return(
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
            <div className={`flex w-full items-center justify-between ml-12 mr-12 "max-w-[1200px] mx-auto" : ""}`}>
                <Link href="/" className='flex items-center justify-center h-20'>
                    <img src="/leetforce.png" alt="Leetforce Logo" className='h-6'></img>
                    <img src="/logo.png" alt="Logo" className='h-8'></img>
                    <p className="text-xs text-gray-500 mt-7">By CoDeC</p>
                </Link>
                <div className='flex items-center space-x-4 flex-1 justify-end'>
                    <a href="https://www.linkedin.com/in/faiz-alam-3933ba220/" className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-brand-orange-s border-2 border-transparent transition duration-300 ease-in-out'>Premium</a>
                    {!user && (
                    <Link href="/auth">
                        <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-brand-orange-s border-2 border-transparent transition duration-300 ease-in-out'>
                            Sign In
                        </button>
                    </Link>)}
                    {user && (
                        <div className='cursor-pointer group relative'>
                            <img src='/avatar.png' alt='user img' className='h-8 w-8 rounded-full'></img>
                            <div className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'>
                                <p className='text-sm'>{user.email}</p>
                            </div>
                        </div>
                    )}
                    {user &&(
                    <Logout></Logout>)}
                </div>
            </div>

        </nav>
    );

}
export default Topbar;