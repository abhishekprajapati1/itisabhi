'use client'
import SpinnerIcon from '@/components/icons/SpinnerIcon';
import TrashIcon from '@/components/icons/TrashIcon'
import useRemoveBlog from '@/lib/mutations/blogs/useRemoveBlog'
import React from 'react'

interface BlogAction {
  blog_id: string;
}

const BlogAction: React.FC<BlogAction> = ({ blog_id }) => {
  const { mutate, isPending: isDeleting } = useRemoveBlog(blog_id);

  return (
    <div className='flex items-center flex-grow md:justify-end flex-wrap'>
      <button disabled={isDeleting} onClick={() => mutate()} type='button' className='icon-button bg-red-50 text-red-600'>
        {isDeleting && <SpinnerIcon />}
        {!isDeleting && <TrashIcon />}
      </button>
    </div>
  )
}

export default BlogAction