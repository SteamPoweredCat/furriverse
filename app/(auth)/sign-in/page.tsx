import AuthForm from '@/components/AuthForm'
import Image from 'next/image'
import React from 'react'

const SignIn = () => {
  return (
    <div className="auth-layout">
      <div className='flex justify-center items-center mb-8'>
          <Image src="/icons/logo.svg" width={75} height={75} alt="Furriverse icon" className='mr-5'/>
          <h1 className='text-purple-500 font-bold text-[40px] text-center'>Furriverse</h1>
        </div>
      <div className="flex flex-col items-center justify-between min-h-[600px] bg-white max-w-[624px] w-full rounded-2xl p-3 bg-opacity-0 space-y-10">
        <div className='flex flex-col w-full'>
          <h2 className="text-[28px] text-white font-semibold mb-3">Welcome Back!</h2>
          <p className="text-white">Please enter your credentials to sign into Furriverse.</p>
        </div>
        <AuthForm type='login' />
      </div>
    </div>
  )
}

export default SignIn