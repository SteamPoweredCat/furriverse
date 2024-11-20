"use client";

import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface CommentFormProps {
  commentId?: number
  reply?: boolean
  handleClose?: () => void;
  className?: string;
}

const CommentForm = ({ commentId, reply = false, handleClose, className }: CommentFormProps) => {
  const [comment, setComment] = useState('');
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(comment);

    setComment('');
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col rounded-lg mb-5  max-w-[800px] w-full", className)}>
      <div className="flex flex-row gap-2 relative">
        <div className="w-9 h-9 bg-gray-700 rounded-md">
          <Image src="/icons/profile.svg" width={30} height={30} alt="avatar" className="h-full w-full object-contain" />
        </div>
        <Textarea className="flex flex-col gap-3 bg-gray-750 border-gray-625 justify-start items-start h-20 w-full rounded-sm focus-visible::ring-0 focus-within:ring-offset-0 text-white relative" onChange={e => setComment(e.target.value)} value={comment} />       
        <div className="absolute bottom-0 right-0 flex gap-2 z-10">
          {reply && <Button className='  text-red-500 hover:text-red-600 p-1 h-fit' onClick={handleClose}>Close</Button>}
          <Button className='text-green-500 hover:text-green-600 p-1 h-fit' type="submit">Submit</Button>
        </div>
      </div>
    </form>
  )
}

export default CommentForm