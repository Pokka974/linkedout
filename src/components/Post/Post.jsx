import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material'
import InputOption from '../Feed/InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
      <div ref={ref} className='bg-white pt-3 px-3 p-1 mb-2 rounded-lg'>
            <div className='flex mb-2'>
                  <Avatar src={photoUrl}>{name[0]}</Avatar>
                  <div className='ml-2'>
                        <h2 className='text-md font-semibold'>{name}</h2>
                        <p className='text-sm text-gray-600'>{description}</p>
                  </div>
            </div>

            <div className='truncate'>
                  <p>{message}</p>
            </div>
            <hr className='my-1' />
            <div className='flex justify-between'>
                  <InputOption Icon={ThumbUpOffAltIcon} title="J'aime" color='gray'/>
                  <InputOption Icon={CommentIcon} title="Commenter" color='gray'/>
                  <InputOption Icon={ShareIcon} title="Partager" color='gray'/>
                  <InputOption Icon={SendIcon} title="Envoyer" color='gray'/>
            </div>
      </div>
  )
})

export default Post