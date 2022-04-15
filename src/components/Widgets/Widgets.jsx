import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {

      const newsArticle = (heading, subtitle) => (
            <div className='flex p-3 cursor-pointer hover:bg-gray-200'>
                  <div className='text-blue-500 mr-1'>
                        <FiberManualRecordIcon className='text-sm' />
                  </div>

                  <div className='flex-1'>
                        <h4 className='text-lg font-semibold'>{heading}</h4>
                        <p className='text-gray-600'>{subtitle}</p>
                  </div>
            </div>
      )

      return (
            <div className='sticky top-20 flex-[0.2] bg-white
            rounded-lg border-[1px] border-gray-200 h-fit p-3'>
                  <div className='flex items-center justify-between p-3'>
                        <h2 className='text-md font-semibold'>LinkedIn News</h2>
                        <InfoIcon />
                  </div>

                  {newsArticle('Pokka is back', 'Top news - 9099 readers')}
                  {newsArticle('Laboris aute et ', 'proident quis laboris amet amet deserunt enim excepteur enim sunt tempor occaecat.')}
                  {newsArticle('Quis excepteur consequat ', 'amet dolor tempor id sunt aliqua qui ipsum quis Lorem.')}
                  {newsArticle('Elit pariatur dolor non dolore.', 'Eu sit velit incididunt pariatur sit minim et nisi commodo est aliquip labore est pariatur.')}
            </div>
      )
}

export default Widgets