import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';

function Sidebar() {
    //const open= false;
    const open = useSelector((store) => store.app.open)
    const sidebarItem = [
        {
            icons :  <IoHomeOutline className='h-5 w-5' />,
            title : 'Home'
        },
        {
            icons :  <SiYoutubeshorts className='h-5 w-5'/>,
            title : 'Short'
        },
        {
            icons :  <MdSubscriptions className='h-5 w-5'/>,
            title : 'Subscription'
        },
        {
            icons :  <IoHomeOutline className='h-5 w-5' />,
            title : 'Home'
        },
        {
            icons :  <SiYoutubeshorts className='h-5 w-5'/>,
            title : 'Short'
        },
        {
            icons :  <MdSubscriptions className='h-5 w-5'/>,
            title : 'Subscription'
        },
        {
            icons :  <IoHomeOutline className='h-5 w-5' />,
            title : 'Home'
        },
        {
            icons :  <SiYoutubeshorts className='h-5 w-5'/>,
            title : 'Short'
        },
        {
            icons :  <MdSubscriptions className='h-5 w-5'/>,
            title : 'Subscription'
        },
        {
            icons :  <IoHomeOutline className='h-5 w-5' />,
            title : 'Home'
        },
        {
            icons :  <SiYoutubeshorts className='h-5 w-5'/>,
            title : 'Short'
        },
        {
            icons :  <MdSubscriptions className='h-5 w-5'/>,
            title : 'Subscription'
        },
        {
            icons :  <IoHomeOutline className='h-5 w-5' />,
            title : 'Home'
        },
        {
            icons :  <SiYoutubeshorts className='h-5 w-5'/>,
            title : 'Short'
        },
        {
            icons :  <MdSubscriptions className='h-5 w-5'/>,
            title : 'Subscription'
        },
        
    ]
  return (
    <>
    <div className='w-[15%]  flex flex-col gap-4 h-[100vh] fixed top-14 overflow-scroll  border border-gray-300 '>
        {
            sidebarItem.map((item, index) => {
                return (
                    <div key={index} className='flex gap-4 px-4'>
                    {/* icon and title */}
                      {item.icons}
                    <p className={` ${open ? 'block' : 'hidden'}`} > {item.title} </p>
                </div>
                )
            } )
        }
       
       
    </div>
    </>
  )
}

export default Sidebar