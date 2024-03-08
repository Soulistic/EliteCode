import React from 'react';

type ResetPasswordProps = {
    
};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return <form className='space-y-6 px-6 py-4'>
    <h3 className='text-xl font-medium text-white'>Reset Password</h3>
    <p className='text-sm text-white'>Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.</p>
    <div>
        <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Your Email</label>
        <input type="email" name="email" id="email" placeholder='name@company.com' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'></input>
    </div>
    
    <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
        Reset password
    </button>
</form>
}

export default ResetPassword;