import { authModalState } from '@/atoms/authModalAtom';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const router=useRouter();
    const setAuthModal = useSetRecoilState(authModalState);
    const clickHandler =(type:'login')=>{
        setAuthModal((prev)=>({...prev,type}))
    }
    const [inputs,setInputs]=useState({name:"",email:"",password:""})
    const changeHandlerInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
    };
    const handleRegister =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputs.email || !inputs.name || !inputs.password) return alert("Please enter all fields")
        try {
            toast.loading("Creating your account",{position: "top-center",toastId: "loadingToast"})
            const newUser=await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser) return;
            const userData={
                uid:newUser.user.uid,
                email:newUser.user.email,
                displayName:newUser.user.displayName,
                createdAt:Date.now(),
                updatedAt:Date.now(),
                likedProblems:[],
                dislikedProblems:[],
                starredProblems:[],
                solvedProblems:[]
            }
            await setDoc(doc(firestore,"users",newUser.user.uid),userData)
            router.push('/');
        } catch (error:any) {
            toast.error(error.message,{position: 'top-center',});
        }
        finally{
            toast.dismiss("loadingToast");
        }
        // console.log(inputs);
    };
    useEffect(() => {
        if(error){
            alert(error.message);
        }
    },[error])
    // console.log(inputs);
    return <form className='space-y-6 px-6 py-4' onSubmit={handleRegister}>
        <h3 className='text-xl font-medium text-white'>Register to Elitecode</h3>
        <div>
            <label htmlFor="name" className='text-sm font-medium block mb-2 text-gray-300'>Your Name</label>
            <input type="name" name="name" id="name" placeholder='John Doe' onChange={changeHandlerInput} className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'></input>
        </div>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Email</label>
            <input type="email" name="email" id="email" placeholder='name@company.com' onChange={changeHandlerInput} className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'></input>
        </div>
        <div>
            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>Password</label>
            <input type="password" name="password" id="password" placeholder='*******' onChange={changeHandlerInput} className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'></input>
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
            {loading ? "Signing Up...":"Sign Up"}
        </button>
        <div>
            <p className='text-sm font-medium text-gray-500'>Already have an account? <a href="#" onClick={()=>clickHandler('login')} className='text-blue-700 hover:underline'>Sign In</a></p>
        </div>
    </form>
}
export default Signup;