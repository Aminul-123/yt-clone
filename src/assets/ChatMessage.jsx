import React from 'react'

function ChatMessage({item}) {
  return (
    <>
    <div className='flex' >
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJxOLfDct_vEPdS-6OsRnS-kDl_HCv5nI2A&s" alt="profile img" className='h-8 w-8 rounded-full' />

        </div>
        <div className='flex items-center'>
            {/* h1 => username and chat text */}
            <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
            <p className='ml-2 py-2 text-sm'>{item.message} </p>
        </div>
    </div>
    </>
  )
}

export default ChatMessage