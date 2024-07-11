import React  from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/appSlice';
function Navbar() {
  const dispatch = useDispatch()
  
  const  toggleHandle = ()=> {
    dispatch(toggleSidebar);
  }
  return (
    <>
    <div className='flex justify-between h-12 border fixed w-full top-0 left-0 right-0 bg-white border-b-gray-300 px-4'>
        <div className='flex items-center gap-3'>
        <RxHamburgerMenu className='h-6 w-6 cursor-pointer' onClick={toggleHandle} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s" alt="youtube logo" className='max-h-8 w-28' />
        </div>
        <div className='flex items-center '>
            <div>
                <input type="text" placeholder='search' className='border border-gray-400 w-96 h-8 outline-none rounded-l-full px-2'  />
            </div>
            <button className='h-8 w-20 border border-gray-400 border-l-0 hover:bg-blue-400 hover:text-white rounded-r-full'>Search</button>
        </div>
        <div className='flex items-center gap-3'>
        <IoMdNotificationsOutline className='h-6 w-6 cursor-pointer'/>
        <CiVideoOn className='h-6 w-6 cursor-pointer'/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJxOLfDct_vEPdS-6OsRnS-kDl_HCv5nI2A&s" alt="profile img" className='h-10 w-10 rounded-full' />
        </div>
    </div>
    </> 
  )
}

export default Navbar

