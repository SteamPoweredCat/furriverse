"use client";

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { getAuthScheme, SignUpValidation } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import CustomInput from './CustomInput';
import OAuth from './OAuth';
import Link from 'next/link';

interface AuthFormProps {
  type: "login" | "register"
}

const AuthForm = ({ type }: AuthFormProps) => {

  const AuthFormValidation = getAuthScheme(type);

  const form = useForm<z.infer<typeof AuthFormValidation>>({
    resolver: zodResolver(AuthFormValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    }
  })

  const onSubmit =(values: z.infer<typeof AuthFormValidation>) => {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="text-white flex-1 w-full flex flex-col gap-5">

        {type === "register" && <CustomInput name="username" label="Username" placeholder="mjones19" control={form.control} />}

        <CustomInput name="email" label="Email" placeholder="mjones@gmail.com" control={form.control} />

        <CustomInput name="password" label="Password"  control={form.control} type="password" />

        <Button type="submit" className="bg-green-400 text-lg font-semibold mt-5">Submit</Button>

        {type === "register" ? (
          <Link href="/sign-in" className="text-md text-center">
            Already have an account?{" "}
            <span className="text-purple-400 font-semibold">Sign In</span>
          </Link>
        ) : (
          <Link href="/sign-up" className="text-md text-center">
            Don't have an account?{" "}
            <span className="text-purple-400 font-semibold">Sign Up</span>
          </Link>
        )}

        <hr className='my-3' />

        <OAuth />
      </form>
    </Form>
  )
}

export default AuthForm