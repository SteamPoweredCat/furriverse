import CommentForm from './CommentForm';
import Comment from './Comment';

const Comments = ({ comments }: { comments: any }) => {
  return (
    <div id="comment" className="w-full flex flex-col gap-3 pt-12 ">
      <h1 className='text-white font-semibold mb-7'>Comments <span className="font-normal">{comments?.thread?.length}</span></h1>
      <CommentForm className="max-w-[843px]" />
      {comments?.thread?.map((comment: any) => (
        <Comment key={comment?.commentid} comment={comment} />
      ))}
    </div>
  )
}

export default Comments;