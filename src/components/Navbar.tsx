import { authModalState } from '@/atoms/authModalAtom';
import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';

type NavbarProps = {
    
};

const Navbar: React.FC<NavbarProps> = () => {
    const [authModal, setAuthModal] = useRecoilState(authModalState);
    const clickHandler = () => {
        setAuthModal({...authModal, isOpen: true});
    }
    return (
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
            <Link href="/" className='flex items-center justify-center h-20'>
                <img src="/leetforce.png" alt="Leetforce Logo" className='h-14'></img>
                <img src="/logo.png" alt="Logo" className='h-14'></img>
                <p className="text-xs text-gray-500 mt-7">By CoDeC</p>
            </Link>
            <div className='flex items-center'>
                <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-brand-orange-s border-2 border-transparent transition duration-300 ease-in-out'
                onClick={clickHandler}>
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Navbar;
