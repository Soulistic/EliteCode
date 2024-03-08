import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar';
import React from 'react';

type indexProps = {
    
};

const index:React.FC<indexProps> = () => {
    React.useEffect(() => {
        // Disable scrolling when the component mounts
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <Navbar></Navbar>
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none '>
            <img src='/hero.png' alt='hero image'/>
        </div>
        <AuthModal></AuthModal>
    </div>
}
export default index;