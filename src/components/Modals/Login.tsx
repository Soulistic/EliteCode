import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const [inputs, setInputs] = useState({ email: "", password: "" });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password) return alert("Please enter all fields");
        try {
            const user = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if (!user) return;
            router.push("/");
        } catch (error: any) {
            alert(error.message);
        }
    };
    
    useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);
    
    const setAuthModal = useSetRecoilState(authModalState);
    
    const clickHandler = (type: 'login' | 'register' | 'forgetPassword') => {
        setAuthModal((prev) => ({ ...prev, type }));
    };
    
    return (
        <form className='space-y-6 px-6 py-4' onSubmit={handleLogIn}>
            <h3 className='text-xl font-medium text-white'>Sign in to Elitecode</h3>
            <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    onChange={handleInputChange}
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                />
            </div>
            <div>
                <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*******"
                    onChange={handleInputChange}
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
                />
            </div>
            <button
                type='submit'
                className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'
            >
                {loading ? "Logging In..." : "Log In"}
            </button>
            <button
                className='flex w-full justify-end'
                onClick={() => clickHandler('forgetPassword')}
            >
                <a href="#" className='text-sm text-brand-orange hover:underline w-full text-right'>Forgot Password?</a>
            </button>
            <div>
                <p className='text-sm font-medium text-gray-500'>Don't have an account? <a href="#" onClick={() => clickHandler('register')} className='text-blue-700 hover:underline'>Sign Up</a></p>
            </div>
        </form>
    );
}

export default Login;
