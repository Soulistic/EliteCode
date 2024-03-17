import { authModalState } from '@/atoms/authModalAtom';
import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';

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
    const authModal=useRecoilValue(authModalState);
    const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

	if (pageLoading) return null;

    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <Navbar></Navbar>
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none '>
            <img src='/hero.png' alt='hero image'/>
        </div>
        {authModal.isOpen && <AuthModal></AuthModal>}
    </div>
}
export default index;