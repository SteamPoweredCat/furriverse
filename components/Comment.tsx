"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from './ui/button';
import CommentForm from './CommentForm';
import { formatDateTime, htmlSanitizer } from '@/lib/utils';

const Comment = ({ comment }: { comment: any }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div className="flex flex-col rounded-lg ">
      <div className="flex flex-row gap-2">
        <div className="w-9 h-9 bg-gray-700 rounded-[4px] overflow-clip">
          <Image src={comment?.user?.usericon || "/icons/profile.svg"} width={30} height={30} alt="avatar" className="h-full w-full object-contain" />
        </div>
        <div className="flex flex-col gap-1 max-w-[800px] w-full">
          <div className="flex flex-col gap-1 bg-gray-800 p-3  w-full rounded-sm text-[13.75px] pb-4 border border-gray-700">
            <div className="flex gap-4 items-center">
              <p className="text-gray-400 font-bold">{comment?.user?.username}</p>
              <p className="text-gray-500 font-[500] text-xs">{formatDateTime(comment?.posted || "").dateOnly}</p>
            </div>
            <p className="text-white">{htmlSanitizer(comment?.body)}</p>
          </div>
          <Button variant="ghost" onClick={() => setShowReplyForm(true)} className="w-fit p-0 h-fit text-gray-500 hover:text-green-500 text-sm mb-3">Reply</Button>
          {showReplyForm && <CommentForm reply commentId={comment.id} handleClose={() => setShowReplyForm(false)} />}
          {comment?.replies?.length > 0 && comment.replies.map((reply: any) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Comment