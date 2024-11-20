"use client";

import Image from 'next/image'
import React, { MouseEvent } from 'react'
import Like from './icons/Like'
import Comment from './icons/Comment'
import Share from './icons/Share'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ArtActionsProps {
  mini?: boolean
  post: any;
}

const ArtActions = ({ mini = false, post }: ArtActionsProps) => {
  const router = useRouter();

  const handleLink = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/post/${post?.deviationid}#comment`);
  }

  return (
    <div className={cn("w-full flex justify-between", { "max-md:justify-between": mini})}>
      <div className="flex gap-2 text-white items-center">
        <Like className={cn("size-6 max-md:size-10 hover:stroke-purple-900 cursor-pointer", { "max-md:size-9 size-7": mini })} />
        {post?.stats?.favourites || 0}
      </div>
      <div className="flex gap-2 text-white items-center z-20" onClick={handleLink}>
        <Comment className={cn("size-6 max-md:size-10 hover:stroke-purple-900 hover:fill-purple-900 cursor-pointer", { "max-md:size-9 size-7": mini })} />
        {post?.stats?.comments || 0}
      </div>
      <div className="flex gap-2 text-white items-center">
        <Share className={cn("size-6 max-md:size-10 hover:stroke-purple-900", { "max-md:size-9 size-7": mini })} />
      </div>
    </div>
  )
}

export default ArtActions