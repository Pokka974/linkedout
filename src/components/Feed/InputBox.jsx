import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
function InputBox({sendPost, input, setInput}) {
  return (
      <div className='bg-white pt-2.5 px-2.5 rounded-lg mb-5'>
            <div className='border-[1px] border-gray-200 rounded-3xl flex p-2.5 text-gray-600 pl-2.5'>
                  <CreateIcon />
                  <form className='flex w-full' action="">
                        <input value={input} onChange={e => setInput(e.target.value)} className='border-0 flex-1 ml-2.5 outline-none' type="text" />
                        <button onClick={sendPost} className='hidden' type='submit'>Envoyer</button>
                  </form>
            </div>
            <div className='flex justify-between w-full h-16 py-1'>
                  <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                  <InputOption Icon={SubscriptionsIcon} title='Vidéo' color='#7FC15E' />
                  <InputOption Icon={EventNoteIcon} title='Événement' color='#E7A33E' />
                  <InputOption Icon={NewspaperIcon} title='Rédiger un article' color='#FC9295' />
            </div>
      </div>
  )
}

export default InputBox